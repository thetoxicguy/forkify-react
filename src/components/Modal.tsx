import * as React from 'react';
interface ModalProps {
}

const Modal: React.FC<ModalProps> = () => {
  return (
    <>
      <div className="overlay hidden"></div><div className="add-recipe-window hidden">
        <button className="btn--close-modal">&times;</button>
        <form className="upload">
          <div className="upload__column">
            <h3 className="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input
              defaultValue="TEST"
              required
              name="title"
              type="text" />
            <label>URL</label>
            <input
              defaultValue="TEST"
              required
              name="sourceUrl"
              type="text" />
            <label>Image URL</label>
            <input defaultValue="TEST"
              required
              name="image"
              type="text" />
            <label>Publisher</label>
            <input defaultValue="TEST"
              required
              name="publisher"
              type="text" />
            <label>Prep time</label>
            <input defaultValue="23"
              required
              name="cookingTime"
              type="number" />
            <label>Servings</label>
            <input defaultValue="23"
              required
              name="servings"
              type="number" />
          </div>

          <div className="upload__column">
            <h3 className="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              defaultValue="0.5,kg,Rice"
              type="text"
              required
              name="ingredient-1"
              placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 2</label>
            <input
              defaultValue="1,,Avocado"
              type="text"
              name="ingredient-2"
              placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 3</label>
            <input
              defaultValue=",,salt"
              type="text"
              name="ingredient-3"
              placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 4</label>
            <input
              type="text"
              name="ingredient-4"
              placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 5</label>
            <input
              type="text"
              name="ingredient-5"
              placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 6</label>
            <input
              type="text"
              name="ingredient-6"
              placeholder="Format: 'Quantity,Unit,Description'" />
          </div>

          <button className="btn upload__btn">
            <svg>
              <use href="src/img/icons.svg#icon-upload-cloud"></use>
            </svg>
            <span>Upload</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Modal;