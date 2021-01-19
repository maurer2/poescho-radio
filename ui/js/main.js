import {html, render} from 'lit-html';

import formTemplate from './form.js';

const template = html`
  <h1>Poescho-Radio</h1>
  ${formTemplate()}
`;

render(template, document.body);
