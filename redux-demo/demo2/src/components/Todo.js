import React from 'react';
import Proptypes from 'prop-types';

const Todo = ({onClick,completed,text}) => (
  <li onClick={onClick} style= {{textDecoration:completed?'line-throuth':'none'}}>
    {text}
  </li>
);

Todo.protypes = {
  onClick:Proptypes.func.isRequired,
  completed:Proptypes.bool.isRequired,
  text:Proptypes.string.isRequired
}

export default Todo;