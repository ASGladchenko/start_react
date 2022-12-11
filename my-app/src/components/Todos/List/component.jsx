import React from "react";

import {connect} from "react-redux";

import Item from "./Item";

import {handleAddTodo} from "../../../store/todos/actions";


import {selectTodos} from "../../../store/todos/selectors";

import './styles.scss';

const List = ({todos}) => (
    <ul className="list">
        {todos.map(({id, value, checked}) => (
            <Item
                id={id}
                key={id}
                value={value}
                checked={checked}
            />
        ))}
    </ul>
)


const mapStateToProps = state => ({
        todos: selectTodos(state),
    }
)

const mapDispatchToProps = {
    handleAddTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
