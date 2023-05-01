// Import our custom CSS
import '../sass/main.scss';

import './components/index';

// Import javascript file as needed
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';
import Dashboard from './pages/dashboard';
import Add from './pages/add';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CheckAuth from './pages/auth/check-auth';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
  '/login.html': Login,
  '/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  CheckAuth.checkLogin();
  const route = detectRoute();
  route.init();
});
