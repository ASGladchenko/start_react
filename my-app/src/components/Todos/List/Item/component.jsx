import React from "react";

import {connect} from "react-redux";


import {selectTodos} from "../../../../store/todos/selectors";
import {checkTodo, handleRemovedTodo} from "../../../../store/todos/actions";

import './styles.scss';


const Item = ({value, id, handleRemovedTodo,  checked,checkTodo }) => {
    return(
        <li className="item">
            <div className={checked ? "checked" : "" }>
                <input
                    className="check"
                    type="checkbox"
                    onClick={() => checkTodo(id)}
                />
                {value}
            </div>
            <button onClick={() =>handleRemovedTodo(id)
            }>
                x
            </button>
        </li>
    )
}

const mapStateToProps = state => ({
        todos: selectTodos(state),
    }
)

const mapDispatchToProps = {
    handleRemovedTodo,
    checkTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
