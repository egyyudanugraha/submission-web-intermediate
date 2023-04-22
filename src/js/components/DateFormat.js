import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { updateWhenLocaleChanges, msg } from '@lit/localize';

class DateFormat extends LitWithoutShadowDom {
  static properties = {
    posted: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <span class="badge rounded-pill text-bg-secondary">${this._postedAt(this.posted)}</span>
    `;
  }

  _postedAt(date) {
    const now = new Date();
    const posted = new Date(date);
    const diff = now - posted;
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffSeconds = Math.floor(diff / 1000);

    if (diffDays > 0) {
      return `${diffDays} ${msg(`days ago`)}`;
    }
    if (diffHours > 0) {
      return `${diffHours} ${msg(`hours ago`)}`;
    }
    if (diffMinutes > 0) {
      return `${diffMinutes} ${msg(`minutes ago`)}`;
    }
    if (diffSeconds > 0) {
      return `${diffSeconds} ${msg(`second ago`)}`;
    }
    return msg(`just now`);
  }
}

customElements.define('date-format', DateFormat);
