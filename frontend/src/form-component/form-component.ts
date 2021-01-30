/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

import {
  LitElement, html, customElement, property, css,
  } from 'lit-element';

  @customElement('form-component')
  export class FormComponent extends LitElement {
    static styles = css`
      :host {
        display: block;
      }
    `;

    @property({ type: String })
    serialNumber = '';

    @property({ type: Number })
    calculatedNumber = 1234;

    private handleSubmit(event: Event) {
      event.preventDefault();

      console.log('handle submit', event);
    }

    private handleInput(event: Event) {
      if (!event.currentTarget) {
        return;
      }
      const newInputValue = (event.currentTarget as HTMLInputElement).value;

      this.serialNumber = newInputValue;
    }

    render() {
      return html`
        <form action="" method="post" @submit=${(event: Event) => this.handleSubmit(event)}>
          <code>Serial number: ${this.serialNumber}</code>
          <div>
            <label for="serialNumber">Serial number:</label>
            <input
              type="text"
              id="serial-number"
              name="serial-number"
              placeholder="Serial number"
              .value=${this.serialNumber}
              @input=${(event: Event) => this.handleInput(event)}
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
