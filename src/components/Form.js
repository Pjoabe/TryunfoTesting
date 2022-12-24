import React, { Component } from 'react';

class Form extends Component {
  render() {
    // hasTrunfo
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <fieldset>
        <form>
          <label htmlFor="name">
            <input
              value={ cardName }
              id="name"
              name="card-name"
              type="text"
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            <input
              value={ cardDescription }
              id="description"
              type="text"
              name="description"
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="number1">
            <input
              value={ cardAttr1 }
              id="number1"
              name="number1"
              type="number"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="number2">
            <input
              value={ cardAttr2 }
              id="number2"
              name="number2"
              type="number"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="number3">
            <input
              value={ cardAttr3 }
              id="number3"
              name="number3"
              type="number"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            <input
              value={ cardImage }
              id="image"
              name="image"
              type="text"
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="select">
            <select
              value={ cardRare }
              id="select"
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            <input
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              type="checkbox"
              onChange={ onInputChange }
            />
          </label>

          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
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

Form.propTypes = {}.isRequired;

export default Form;
