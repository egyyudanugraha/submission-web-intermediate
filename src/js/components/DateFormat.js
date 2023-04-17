import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class DateFormat extends LitWithoutShadowDom {
  static properties = {
    posted: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html` <span class="text-muted"><small>${this._postedAt(this.posted)}</small></span> `;
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
      return `${diffDays} days ago`;
    }
    if (diffHours > 0) {
      return `${diffHours} hours ago`;
    }
    if (diffMinutes > 0) {
      return `${diffMinutes} minutes ago`;
    }
    if (diffSeconds > 0) {
      return `${diffSeconds} seconds ago`;
    }
    return 'just now';
  }
}

customElements.define('date-format', DateFormat);
