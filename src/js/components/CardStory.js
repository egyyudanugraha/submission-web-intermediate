import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';

class CardStory extends LitWithoutShadowDom {
  static properties = {
    name: {
      type: String,
      reflect: true,
    },
    description: {
      type: String,
      reflect: true,
    },
    date: {
      type: String,
      reflect: true,
    },
    image: {
      type: String,
      reflect: true,
    },
  };
  constructor() {
    super();

    this.name = '';
    this.description = '';
    this.date = '';
    this.image = '';
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.image}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <date-format posted="${this.date}"></date-format>
        </div>
      </div>
    `;
  }
}

customElements.define('card-story', CardStory);
