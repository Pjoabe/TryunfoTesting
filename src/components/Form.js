import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <fieldset>
        <form>
          <label htmlFor="name">
            <input
              id="name"
              name="card-name"
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description">
            <input
              id="description"
              type="text"
              name="description"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="number1">
            <input
              id="number1"
              name="number1"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="number2">
            <input
              id="number2"
              name="number2"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="number3">
            <input
              id="number3"
              name="number3"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image">
            <input
              id="image"
              name="image"
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="select">
            <select
              id="select"
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            <input
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>

          <button
            id="button"
            data-testid="save-button"
            type="button"
          >
            Salvar
          </button>

        </form>
      </fieldset>
    );
  }
}

export default Form;
