import Auth from '../../api/auth';
import { path } from '../../config/config';
import Utils from '../../utils/utils';

const Login = {
  init() {
    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogin();
      },
      false,
    );
  },

  async _getLogin() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData }))
      try {
        this._loadingButton();
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });

        Utils.setStorage(path.KEY_TOKEN, response.loginResult.token);
        Utils.setStorage(path.KEY_NAME, response.loginResult.name);
        this._goToDashboardPage();
      } catch (error) {
        this._loadingButton(true);
        console.log(error);
      }
  },

  _getFormSelector() {
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const submit = document.querySelector('button[type=submit]');

    return { email, password, submit };
  },

  _getFormData() {
    const { email, password } = this._getFormSelector();

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _loadingButton(err) {
    const { email, password, submit } = this._getFormSelector();
    if (err) {
      email.removeAttribute('disabled');
      password.removeAttribute('disabled');
      submit.removeAttribute('disabled');
      submit.innerHTML = 'Login';

      return;
    }

    email.setAttribute('disabled', 'true');
    password.setAttribute('disabled', 'true');
    submit.setAttribute('disabled', 'true');
    submit.innerHTML = 'Loging...';
  },

  _goToDashboardPage() {
    window.location.replace('/');
  },
};

export default Login;
