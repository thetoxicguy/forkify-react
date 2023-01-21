import * as React from 'react';
import Icons from '../img/icons.svg';

// interface RecipePlaceholderProps {

// }

const RecipePlaceholder: FunctionComponent<RecipePlaceholderProps> = () => {
    return (
        <div
            className="recipe"
        >
            <div className="message">
                <div>
                    <svg>
                        <use href={`${Icons}#icon-smile`}></use>
                    </svg>
                </div>
                <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </div>
        </div>

    );
}

export default RecipePlaceholder;