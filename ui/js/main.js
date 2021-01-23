import {html, render} from 'lit-html';

// import formTemplate from './form.js';

let serialNumber = ''
let calculatedNumber = 1234;

function handleSubmit(event) {
  event.preventDefault();

  console.log('submit', event);
}

function handleInput(event) {
  const newInputValue = event.target.value;

  serialNumber = newInputValue;

  console.log('handleInput', newInputValue, serialNumber)

  render(pageTemplate(), document.body);
}

const formTemplate = (mauTest) => html`
  <form action="" method="post" @submit=${(event) => handleSubmit(event)}>
    <h1>${serialNumber} ${mauTest}</h1>
    <div>
      <label for="serialNumber">Serial number:</label>
      <input
        type="text"
        id="serial-number"
        name="serial-number"
        placeholder="Serial number"
        @input=${(event) => handleInput(event)}
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

const pageTemplate = () => html`
  <h1>Poescho-Radio</h1>
  ${formTemplate()}
`;

render(pageTemplate(), document.body);
