import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { updateWhenLocaleChanges, msg } from '@lit/localize';

class FootApp extends LitWithoutShadowDom {
  constructor() {
    super();

    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="footer bg-darkblue">
        <div class="container">
          <div class="social-icons">
            <a href="https://github.com/egyyudanugraha" target="_blank">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://github.com/egyyudanugraha" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <div>&copy; Copyright 2023</div>
          <div>
            ${msg(`Build with`)} <i class="bi bi-heart-fill"></i> ${msg(`by`)}
            <a class="website" href="https://egyyudanugraha.site/" target="_blank">Yuda</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('foot-app', FootApp);
