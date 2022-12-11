import React from "react";

import {connect} from "react-redux";

import EnterTodo from "./EnterTodo";
import List from "./List";

import EmptyList from "./EmptyList";

import {selectTodosLng} from "../../store/todos/selectors";


const TodosComponent = ({todosLng}) => (
    <div className="todos">
        <h1 className="title">Todos</h1>
        <EnterTodo/>
        {todosLng === 0 ? <EmptyList/> : <List/>}
    </div>
)
const mapStateToProps = state => ({
        todosLng: selectTodosLng(state),
    }
)


export default connect(mapStateToProps)(TodosComponent)
