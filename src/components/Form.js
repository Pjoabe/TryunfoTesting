import React, { Component } from 'react';

class Form extends Component {
  render() {
    // hasTrunfo
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;
    // console.log(isSaveButtonDisabled);
    return (
      <fieldset>
        <form>
          <label htmlFor="name">
            Name
            <input
              value={ cardName }
              id="name"
              name="cardName"
              type="text"
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Description
            <input
              value={ cardDescription }
              id="description"
              type="text"
              name="cardDescription"
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="number1">
            Attribute 1
            <input
              value={ cardAttr1 }
              id="number1"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="number2">
            Attribute 2
            <input
              value={ cardAttr2 }
              id="number2"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="number3">
            Attribute 3
            <input
              value={ cardAttr3 }
              id="number3"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Card Image
            <input
              value={ cardImage }
              id="image"
              name="cardImage"
              type="text"
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="select">
            Card Type
            <select
              name="cardRare"
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

          { hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="checkbox">
                Super Trybe Trunfo
                <input
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  type="checkbox"
                  name="cardTrunfo"
                  id="checkbox"
                  data-testid="trunfo-input"
                />
              </label>
            )}

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
