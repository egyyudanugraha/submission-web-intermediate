import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputImagePreview extends LitWithoutShadowDom {
  static properties = {
    inputId: { type: String, reflect: true },
    defaultImage: { type: String, reflect: true },
    defaultImageAlt: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.type = 'text';
  }

  render() {
    return html`
      <div class="d-grid gap-3">
        <div class="d-flex justify-content-center">
          <img
            src="https://placehold.co/200"
            class="img-fluid img-thumbnail"
            style="width: 200px; height: 200px; object-fit: cover"
            id="${this.inputId || nothing}ImgChange"
          />
        </div>

        <input
          type="file"
          class="form-control"
          id=${this.inputId || nothing}
          accept="image/*"
          ?required=${this.required}
          @change=${this._updatePhotoPreview}
        />
      </div>

      ${this._feedbackTemplate()}
    `;
  }

  _updatePhotoPreview() {
    const inputPhotoImgChange = document.querySelector('#inputPhotoImgChange');
    const inputPhotoImgInput = document.querySelector('#inputPhoto');

    const photo = inputPhotoImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      inputPhotoImgChange.src = event.target.result;
    };

    reader.readAsDataURL(photo);
  }

  _feedbackTemplate() {
    let validFeedbackTemplate = '';
    let invalidFeedbackTemplate = '';
    if (this.validFeedbackMessage) {
      validFeedbackTemplate = html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }
    if (this.invalidFeedbackMessage) {
      invalidFeedbackTemplate = html`
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      `;
    }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`;
  }
}

customElements.define('input-image-preview', InputImagePreview);
