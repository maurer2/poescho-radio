import { LitElement } from 'lit-element';
export declare class FormComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    serialNumber: string;
    calculatedNumber: number;
    private handleSubmit;
    private handleInput;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'form-component': FormComponent;
    }
}
//# sourceMappingURL=form-component.d.ts.map