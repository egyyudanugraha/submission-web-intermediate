import api from '../config/api-endpoint';
import { path } from '../config/config';
import Utils from '../utils/utils';
import UtilsAPI from './utils';

const Story = {
  async stories() {
    const response = await api.get(path.STORIES, {
      headers: {
        Authorization: `Bearer ${Utils.getStorage(path.KEY_TOKEN)}`,
      },
      params: {
        size: 12,
      },
    });

    return response.data;
  },
  async detailStory(id) {
    const responseStory = await api.get(path.DETAIL_STORY(id), {
      headers: {
        Authorization: `Bearer ${Utils.getStorage(path.KEY_TOKEN)}`,
      },
    });

    const responseLocation = await UtilsAPI.getLocation({
      latitude: responseStory.data.story.lat,
      longitude: responseStory.data.story.lon,
    });

    const result = {
      ...responseStory.data.story,
      location: `${responseLocation.city || responseLocation.state}, ${responseLocation.country}`,
    };

    return result;
  },
  async add(formData) {
    const response = await api.post(path.STORIES, formData, {
      headers: {
        Authorization: `Bearer ${Utils.getStorage(path.KEY_TOKEN)}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },
  async addGuest(formData) {
    const response = await api.post(path.GUEST_STORIES, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export default Story;
