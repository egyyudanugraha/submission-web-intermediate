import { html, css, LitElement } from 'lit';

class BadgeRounded extends LitElement {
  static properties = {
    primary: {
      type: Boolean,
      reflect: true,
    },
  };

  static styles = css`
    :host {
      font-size: 0.8rem;
      font-weight: 500;
      color: white;
    }

    span {
      padding: 2px 6px;
      border-radius: 25px;
    }

    .primary {
      background-color: #0b2447;
    }

    .secondary {
      background-color: #65768f;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <span class="${this.primary ? 'primary' : 'secondary'}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('badge-rounded', BadgeRounded);
