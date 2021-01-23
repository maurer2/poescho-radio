import { html, render } from 'lit-html';

import formTemplate from './form';

const pageTemplate = () => html`
  <h1>Poescho-Radio</h1>
  ${formTemplate(renderPage)}
`;

function renderPage() {
  render(pageTemplate(), document.body);
}

renderPage();
