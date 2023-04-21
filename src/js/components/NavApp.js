import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: {
      type: String,
      reflect: true,
    },
    addButton: {
      type: Boolean,
      reflect: true,
    },
  };
  constructor() {
    super();
    this._checkProperty();
  }

  _checkProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="/">${this.brandName}</a>
          <a
            class="btn btn-sm btn-outline-darkblue ${this.addButton ? 'visible' : 'invisible'}"
            href="add.html"
          >
            Tambah story
          </a>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
