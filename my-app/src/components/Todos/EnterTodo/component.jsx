import React from "react";

import {connect} from "react-redux";

import {enterTodo, handleAddTodo} from "../../../store/todos/actions";

import './styles.scss';
import { selectTodoValue, selectTodoValueLng} from "../../../store/todos/selectors";

const EnterTodo = ({ todoValue, enterTodo, handleAddTodo,enterValueLng}) => (
  <div className="enter-wrap">
    <input
      type="text"
      placeholder="Write your todo here"
      value={todoValue}
      onChange={({target})=>{enterTodo(target.value)}}
      className="enter"
    />
    <button
      className="add"
      onClick={()=>{enterValueLng >= 3 && handleAddTodo()}    }
    >
      Add Todo
    </button>
  </div>
)
const mapStateToProps = state => ({
        todoValue: selectTodoValue(state),
        enterValueLng: selectTodoValueLng(state),

    }
)

const mapDispatchToProps = {
    handleAddTodo,
    enterTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTodo)


