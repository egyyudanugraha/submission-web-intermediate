import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import Auth from '../api/auth';

class AvatarLogged extends LitWithoutShadowDom {
  static properties = {
    name: {
      type: String,
    },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);

    this.name = Auth.getName();
  }

  render() {
    if (!Auth.getToken()) {
      return html`<a href="login.html" class="link-darkblue">${msg('Login')}</a>`;
    }
    return html`
      <div class="dropdown">
        <a
          class="nav-link dropdown-toggle text-nowrap"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <img
            id="imgUserLogged"
            style="width: 30px;height: 30px"
            class="img-fluid rounded-pill"
            src="https://ui-avatars.com/api/?name=${this.name}&background=random"
            alt=${this.name}
          />
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" @click=${this._userLogOut}>${msg('Logout')}</a></li>
        </ul>
      </div>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    try {
      Auth.logout();
      this._reloadPage();
    } catch (error) {
      console.error(error);
    }
  }

  _reloadPage() {
    window.location.reload();
  }
}

customElements.define('avatar-logged', AvatarLogged);
