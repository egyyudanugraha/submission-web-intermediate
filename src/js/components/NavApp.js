import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: {
      type: String,
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
          <a class="navbar-brand" href="#">${this.brandName}</a>
          <button class="btn btn-sm btn-outline-primary" type="button">Tambah story</button>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
