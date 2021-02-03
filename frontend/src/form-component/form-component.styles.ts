/* eslint-disable import/prefer-default-export */
import { css } from 'lit-element';

export const FormComponentStyles = css`
  .form {
    margin: auto;
    padding: 1rem;
    border: 1px solid black;
    max-width: 320px;
  }

  .results {
    display: grid;
    grid-template-columns: max-content 1fr;
  }

  .key {
    font-weight: bold;
  }

  .value {
    margin-left: 0.75rem;
  }
`;
