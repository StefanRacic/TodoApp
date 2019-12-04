import React, { useContext } from 'react';
import TodoContext from '../context/todo/todoContext';

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { name, id } = todo;
  return (
    <tr>
      <td>{name}</td>
      <td>true</td>
    </tr>
  );
};

export default TodoItem;
