import React, { useContext } from 'react';
import TodoContext from '../context/todo/todoContext';

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { name, id } = todo;
  return (
    <tr>
      <td>
        <a href="">{name}</a>
      </td>
      <td className="text-center">
        <input type="checkbox" name="" id="" />
      </td>
    </tr>
  );
};

export default TodoItem;
