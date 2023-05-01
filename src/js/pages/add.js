import Auth from '../api/auth';
import Story from '../api/story';

const Add = {
  latitude: '',
  longitude: '',
  init() {
    this._initialListener();
    this._getLocation();
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
        lat: this.latitude,
        lon: this.longitude,
      };

      this._sendData(formData);
    });
  },

  _getLocation() {
    if (!navigator.geolocation) {
      window.alert('Geolocation not support on this browser!');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      (err) => {
        console.error(err);
      },
    );
  },

  async _sendData(formData) {
    if (this._validateFormData({ ...formData })) {
      this._loadingButton();
      try {
        if (!Auth.getToken()) {
          await Story.addGuest(formData);
        } else {
          await Story.add(formData);
        }

        this._goToDashboardPage();
      } catch (error) {
        this._loadingButton(true);
        console.error(error);
      }
    }
  },
  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _getFormSelector() {
    const photo = document.querySelector('#inputPhoto');
    const description = document.querySelector('#inputDescription');
    const submit = document.querySelector('button[type=submit]');

    return { photo, description, submit };
  },

  _loadingButton(err) {
    const { photo, description, submit } = this._getFormSelector();
    if (err) {
      photo.removeAttribute('disabled');
      description.removeAttribute('disabled');
      submit.removeAttribute('disabled');
      submit.innerHTML = 'Add Story';

      return;
    }

    photo.setAttribute('disabled', 'true');
    description.setAttribute('disabled', 'true');
    submit.setAttribute('disabled', 'true');
    submit.innerHTML = 'Adding...';
  },

  _goToDashboardPage() {
    window.location.replace('/');
  },
};

export default Add;
