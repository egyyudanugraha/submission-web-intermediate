const Add = {
  init() {
    this._initialListener();
  },

  _initialListener() {
    const addRecord = document.querySelector('#addStoryForm');
    addRecord.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      addRecord.classList.add('was-validated');
      const formData = {
        photo: e.target[0].files[0],
        description: e.target[1].value,
      };

      this._sendData(formData);
    });
  },

  _sendData(formData) {
    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
    }
  },
  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },
};

export default Add;
