import {html, render} from 'lit-html';

let serialNumber = ''
let calculatedNumber = 1234;

function handleSubmit(event) {
  event.preventDefault();
  console.log('submit', event);
}

function handleInput(event, cb) {
  const newInputValue = event.target.value;

  serialNumber = newInputValue;

  console.log('handleInput', newInputValue, serialNumber)

  cb()
}

const formTemplate = (mauTest, updateTemplate) => html`
  <form action="" method="post" @submit=${(event) => handleSubmit(event)}>
    <h1>${serialNumber} ${mauTest}</h1>
    <div>
      <label for="serialNumber">Serial number:</label>
      <input
        type="text"
        id="serial-number"
        name="serial-number"
        placeholder="Serial number"
        @input=${(event) => handleInput(event, updateTemplate)}
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
