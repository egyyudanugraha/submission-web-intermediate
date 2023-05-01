const Utils = {
  setStorage(key, value) {
    return sessionStorage.setItem(key, value);
  },
  getStorage(key) {
    return sessionStorage.getItem(key);
  },
  destroyStorage(key) {
    return sessionStorage.removeItem(key);
  },
};

export default Utils;
