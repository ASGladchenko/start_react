import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({todos, onRemoveTodo, onCheckTodo}) => (
    <ul className="list">
        {todos.map(({id, value}) => (
            <Item
                id={id}
                key={id}
                value={value}
                onRemoveTodo={onRemoveTodo}
                onCheckTodo={onCheckTodo}
            />
        ))}
    </ul>
)

export default List;