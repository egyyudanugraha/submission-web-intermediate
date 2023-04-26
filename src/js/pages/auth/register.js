import Auth from '../../api/auth';

const Register = {
  init() {
    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      try {
        this._loadingButton();
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        window.alert(response.message);
        this._goToLoginPage();
      } catch (error) {
        this._loadingButton(true);
        console.error(error);
      }
    }
  },

  _getFormSelector() {
    const name = document.querySelector('#inputNama');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const submit = document.querySelector('button[type=submit]');

    return { name, email, password, submit };
  },

  _getFormData() {
    const { name, email, password } = this._getFormSelector();

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToLoginPage() {
    window.location.href = 'login.html';
  },

  _loadingButton(err) {
    const { name, email, password, submit } = this._getFormSelector();
    if (err) {
      name.removeAttribute('disabled');
      email.removeAttribute('disabled');
      password.removeAttribute('disabled');
      submit.removeAttribute('disabled');
      submit.innerHTML = 'Daftar';

      return;
    }

    name.setAttribute('disabled', 'false');
    email.setAttribute('disabled', 'true');
    password.setAttribute('disabled', 'true');
    submit.setAttribute('disabled', 'true');
    submit.innerHTML = 'Registering...';
  },
};

export default Register;
