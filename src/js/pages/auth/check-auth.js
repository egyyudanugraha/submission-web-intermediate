import { path } from '../../config/config';
import Utils from '../../utils/utils';

const CheckAuth = {
  excludeAuth: ['login.html', 'register.html'],
  checkLogin() {
    const authPage = this._isOnAuthPage(this.excludeAuth);
    const getToken = Utils.getStorage(path.KEY_TOKEN);

    if (authPage && getToken) {
      window.location.replace('/');
    }
  },
  _isOnAuthPage(pages) {
    const filteredPages = pages.filter((item) => window.location.pathname.endsWith(item));
    return Boolean(filteredPages.length);
  },
};

export default CheckAuth;
