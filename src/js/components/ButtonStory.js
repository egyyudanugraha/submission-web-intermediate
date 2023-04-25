import { html } from 'lit';
import { updateWhenLocaleChanges, msg } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ButtonStory extends LitWithoutShadowDom {
  static properties = {
    type: {
      type: String,
      reflect: true,
    },
    classes: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();

    this.type = 'button';
    this.classes = '';
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <button class="btn ${this.classes}" type="${this.type}">${msg(`Add story`)}</button>
    `;
  }
}

customElements.define('button-story', ButtonStory);
