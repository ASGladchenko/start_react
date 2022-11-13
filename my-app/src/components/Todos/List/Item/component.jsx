import React from "react";

import './styles.scss';

const Item = ({value, id, onRemoveTodo, onCheckTodo, checked }) => {
    return(
        <li className="item">
            <div className={checked ? "value checked" : "check"}>
                <input
                    className="check"
                    type="checkbox"
                    onClick={(e) => onCheckTodo(e,id)}
                />
                {value}
            </div>
            <button onClick={() => onRemoveTodo(id)}>
                x
            </button>
        </li>
    )
}

export default Item;
