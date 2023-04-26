import { html } from 'lit';
import { msg } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ModalStory extends LitWithoutShadowDom {
  static properties = {
    title: {
      type: String,
      reflect: true,
    },
    location: {
      type: String,
      reflect: true,
    },
    date: {
      type: String,
      reflect: true,
    },
    description: {
      type: String,
      reflect: true,
    },
    imageUrl: {
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

    this.title = '';
    this.location = '';
    this.date = '';
    this.description = '';
    this.imageUrl = '';
    this.placeholder = false;
  }

  render() {
    if (this.placeholder) {
      return html`
        <div class="modal-dialog modal-lg" aria-hidden="true">
          <div class="modal-content">
            <div class="modal-header placeholder-glow">
              <h5 class="modal-title placeholder w-50"></h5>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
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
                </div>
                <div class="col placeholder-glow">
                  <h5><span class="placeholder w-50"></span></h5>
                  <span class="placeholder w-25"></span>
                  <h5><span class="placeholder w-50"></span></h5>
                  <span class="placeholder w-25"></span>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                ${msg('Close')}
              </button>
            </div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${this.title}</h5>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <img id="detailImage" src=${this.imageUrl} class="img-fluid" />
              </div>
              <div class="col">
                <h5>${msg('Location')}</h5>
                <p>${this.location}</p>
                <date-format posted="${this.date}"></date-format>
                <hr />
                <h5>${msg('Description')}</h5>
                <p>${this.description}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ${msg('Close')}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-story', ModalStory);
