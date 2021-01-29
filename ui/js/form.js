import { html, render } from 'lit-html';

let serialNumber = '';
const calculatedNumber = 1234;

function handleSubmit(event) {
  event.preventDefault();

  console.log('submit', event);
}

function handleInput(event, renderCB) {
  const newInputValue = event.target.value;

  serialNumber = newInputValue;

  console.log('handleInput', newInputValue, serialNumber);

  renderCB();
}

const formTemplate = (renderCB) => html`
  <form action="" method="post" @submit=${(event) => handleSubmit(event, renderCB)}>
    <h1>${serialNumber}</h1>
    <div>
      <label for="serialNumber">Serial number:</label>
      <input
        type="text"
        id="serial-number"
        name="serial-number"
        placeholder="Serial number"
        @input=${(event) => handleInput(event, renderCB)}
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
    <div>
      <code>Calculated Number: ${calculatedNumber}</code>
    </div>
  </form>
`;

export default formTemplate;
