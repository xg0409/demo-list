import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = function(state){
  let { todos,onTodoClick } = state;
  let todoList = todos.map(function(todo){
    return (
      <Todo key={todo.id} {...todo} onclick = {() => onTodoClick(todo.id)} />
    )
  })
  return (
    <ul>
    {todoList}
    </ul>
  )
};

TodoList.propTypes = {
  todos:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick:PropTypes.func.isRequired
}

export default TodoList;