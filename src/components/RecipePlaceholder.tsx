import * as React from 'react';
import Icons from '../img/icons.svg';
interface RecipePlaceholderProps {
    name: string,
}

const RecipePlaceholder: React.FC<RecipePlaceholderProps> = ({ name }) => {
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
                <p>Hello {name}, start by searching for a recipe or an ingredient. Have fun!</p>
            </div>
        </div>

    );
}

export default RecipePlaceholder;