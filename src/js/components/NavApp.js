import { html } from 'lit';
import { updateWhenLocaleChanges, msg } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

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

    updateWhenLocaleChanges(this);
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
          <div class="d-flex gap-3 align-items-center">
            <a
              class="btn btn-sm btn-outline-darkblue ${this.addButton ? 'visible' : 'invisible'}"
              href="add.html"
            >
              ${msg(`Add story`)}
            </a>
            <locale-picker></locale-picker>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
