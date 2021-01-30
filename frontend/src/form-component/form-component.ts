/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

import {
  LitElement, html, customElement, property,
} from 'lit-element';

 import { FormComponentStyles } from './form-component.styles';

@customElement('form-component')
export class FormComponent extends LitElement {
  static get styles() {
    return [
      FormComponentStyles,
    ];
  }

  @property({ type: String })
  serialNumber = '';

  @property({ type: Number })
  calculatedNumber = 1234;

  private handleSubmit(event: Event) {
    event.preventDefault();

    console.log('handle submit', event);
  }

  private handleInput(event: InputEvent) {
    if (!event.currentTarget) {
      return;
    }
    const newInputValue = (event.currentTarget as HTMLInputElement).value;

    this.serialNumber = newInputValue;
  }

  render() {
    return html`
      <form class="form" action="" method="post" @submit=${(event: Event) => this.handleSubmit(event)}>
        <code>Serial number: ${this.serialNumber}</code>
        <div>
          <label for="serialNumber">Serial number:</label>
          <input
            type="text"
            id="serial-number"
            name="serial-number"
            placeholder="Serial number"
            .value=${this.serialNumber}
            @input=${(event: InputEvent) => this.handleInput(event)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <code>Calculated Number: ${this.calculatedNumber}</code>
        </div>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-component': FormComponent;
  }
}