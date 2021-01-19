import {html, render} from 'lit-html';

let serialNumber = ''
let calculatedNumber = 1234;

function handleSubmit(event) {
  event.preventDefault();
  console.log('submit', event)
}

const formTemplate = () => html`
  <form action="" method="post" @submit=${handleSubmit}>
    <div>
      <label for="serialNumber">Serial number:</label>
      <input
        type="text"
        id="serial-number"
        name="serial-number"
        placeholder="Serial number"
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
