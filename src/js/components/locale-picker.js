import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { updateWhenLocaleChanges } from '@lit/localize';
import { localeShortNames, setLocaleFromUrl } from './../localization.js';
import { html } from 'lit';

class LocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="changelocale"
          ?checked=${this._getLocaleRenderDOM()[0]}
          @change=${this._changeLocale}
        />
        <badge-rounded ?primary=${this._getLocaleRenderDOM()[0]}
          >${localeShortNames[this._getLocaleRenderDOM()[1]]}</badge-rounded
        >
      </div>
    `;
  }

  _changeLocale(evt) {
    const newLocale = evt.target.checked ? 'id' : 'en';

    if (newLocale !== this._getLocaleRenderDOM()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);

      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }

  _getLocaleRenderDOM() {
    const url = new URL(window.location.href);
    const locale = url.searchParams.get('lang');

    if (locale) {
      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }

    const localeStatus = locale && locale !== 'en';
    const localeStatusName = localeStatus ? 'id' : 'en';

    return [localeStatus, localeStatusName];
  }
}

customElements.define('locale-picker', LocalePicker);
