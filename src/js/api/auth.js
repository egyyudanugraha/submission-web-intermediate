import api from '../config/api-endpoint';
import { path } from '../config/config';
import Utils from '../utils/utils';

const Auth = {
  async register({ name, email, password }) {
    const response = await api.post(path.REGISTER, { name, email, password });
    return response.data;
  },

  async login({ email, password }) {
    const response = await api.post(path.LOGIN, { email, password });
    return response.data;
  },

  getToken() {
    return Utils.getStorage(path.KEY_TOKEN);
  },

  getName() {
    return Utils.getStorage(path.KEY_NAME);
  },

  logout() {
    Utils.destroyStorage(path.KEY_TOKEN);
  },
};

export default Auth;
