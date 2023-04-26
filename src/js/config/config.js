const path = {
  BASE: 'https://story-api.dicoding.dev/v1',
  REGISTER: 'register',
  LOGIN: 'login',
  STORIES: 'stories',
  GUEST_STORIES: 'stories/guest',
  DETAIL_STORY: (id) => `stories/${id}`,
  KEY_TOKEN: 'user-token',
  KEY_NAME: 'username',
  API_KEY_GEOCODING: '83046384d6a344a7a819340113f69867',
};

const axiosConfig = {
  baseURL: path.BASE,
  timeout: 10000,
};

export { path, axiosConfig };
