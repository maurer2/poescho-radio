/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css, } from 'lit-element';
let FormComponent = class FormComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.serialNumber = '';
        this.calculatedNumber = 1234;
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('handle submit', event);
    }
    handleInput(event) {
        if (!event.currentTarget) {
            return;
        }
        const newInputValue = event.currentTarget.value;
        this.serialNumber = newInputValue;
    }
    render() {
        return html `
        <form action="" method="post" @submit=${(event) => this.handleSubmit(event)}>
          <code>Serial number: ${this.serialNumber}</code>
          <div>
            <label for="serialNumber">Serial number:</label>
            <input
              type="text"
              id="serial-number"
              name="serial-number"
              placeholder="Serial number"
              .value=${this.serialNumber}
              @input=${(event) => this.handleInput(event)}
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
};
FormComponent.styles = css `
      :host {
        display: block;
      }
    `;
__decorate([
    property({ type: String })
], FormComponent.prototype, "serialNumber", void 0);
__decorate([
    property({ type: Number })
], FormComponent.prototype, "calculatedNumber", void 0);
FormComponent = __decorate([
    customElement('form-component')
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form-component.js.map