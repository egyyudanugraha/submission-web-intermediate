const path = {
  BASE: 'https://story-api.dicoding.dev/v1',
  REGISTER: 'register',
  LOGIN: 'login',
  STORIES: 'stories',
  GUEST_STORIES: 'stories/guest',
  DETAIL_STORY: (id) => `stories/${id}`,
  KEY_TOKEN: 'user-token',
  KEY_NAME: 'username',
};

const axiosConfig = {
  baseURL: path.BASE,
  timeout: 10000,
};

export { path, axiosConfig };
