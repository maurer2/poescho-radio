/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

import {
  LitElement, html, customElement,
} from 'lit-element';

@customElement('global-styles')
export class GlobalStyles extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="./global-styles.css">
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'global-styles': GlobalStyles;
  }
}
