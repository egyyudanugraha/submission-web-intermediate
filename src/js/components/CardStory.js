import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardStory extends LitWithoutShadowDom {
  static properties = {
    id: {
      type: String,
      reflect: true,
    },
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
    placeholder: {
      type: Boolean,
      reflect: true,
    },
  };

  constructor() {
    super();

    this.id = '';
    this.name = '';
    this.description = '';
    this.date = '';
    this.image = '';
  }

  render() {
    if (this.placeholder) {
      return html`
        <div class="card" aria-hidden="true">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <div class="placeholder-glow">
              <span class="placeholder col-2"></span>
            </div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="card shadow">
        <img src="${this.image}" class="card-img-top skeleton-img" />
        <div class="card-body">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#recordDetailModal"
            data-record-id="${this.id}"
            class="card-title link-darkblue fw-bold text-decoration-none"
            >${this.name}</a
          >
          <p class="card-text">${this.description}</p>
          <date-format posted="${this.date}"></date-format>
        </div>
      </div>
    `;
  }
}

customElements.define('card-story', CardStory);
