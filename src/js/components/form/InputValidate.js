import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputValidate extends LitWithoutShadowDom {
  static properties = {
    type: {
      type: String,
      reflect: true,
    },
    inputId: {
      type: String,
      reflect: true,
    },
    for: {
      type: String,
      reflect: true,
    },
    value: {
      type: String,
      reflect: true,
    },
    validFeedbackMessage: {
      type: String,
      reflect: true,
    },
    invalidFeedbackMessage: {
      type: String,
      reflect: true,
    },
    required: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.type = 'text';
    this.required = false;
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Attribute "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }

    if (!this.hasAttribute('for')) {
      throw new Error(`Atribut "for" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <label for="${this.inputId}" class="form-label">${this.for}</label>
      <input
        id=${this.inputId || nothing}
        class="form-control"
        type=${this.type}
        value=${this.value || nothing}
        ?required=${this.required}
        @input=${(e) => {
          this.value = e.target.value;
        }}
      />

      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('input-validate', InputValidate);
