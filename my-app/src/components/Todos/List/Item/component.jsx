import React from "react";

import './styles.scss';

const Item = ({value, id, onRemoveTodo, onCheckTodo }) => (
  <li className="item">
    <div className="value">
      <input
        className="check"
        type="checkbox"
        onClick={() => onCheckTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
