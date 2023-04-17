import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FootApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main-footer bg-dark">
        <div
          class="container px-3 py-3 text-white fs-6 d-flex justify-content-between align-items-center align-content-center"
        >
          <div class="social-icons fs-5 d-flex gap-3">
            <a class="link-light" href="https://github.com/egyyudanugraha" target="_blank">
              <i class="bi bi-github"></i>
            </a>
            <a class="link-light" href="https://github.com/egyyudanugraha" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <small>&copy; Copyright 2023</small>
          <small>
            Build with <i class="bi bi-heart-fill"></i> by
            <a
              class="link-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="https://egyyudanugraha.site/"
              target="_blank"
              >Yuda</a
            >
          </small>
        </div>
      </div>
    `;
  }
}

customElements.define('foot-app', FootApp);
