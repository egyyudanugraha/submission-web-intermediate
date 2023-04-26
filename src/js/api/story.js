import api from '../config/api-endpoint';
import { path } from '../config/config';
import Utils from '../utils/utils';

const Story = {
  async add(formData) {
    const response = await api.post(path.STORIES, formData, {
      headers: {
        Authorization: `Bearer ${Utils.getStorage(path.KEY_TOKEN)}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  },
  async addGuest(formData) {
    const response = await api.post(path.GUEST_STORIES, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
};

export default Story;
