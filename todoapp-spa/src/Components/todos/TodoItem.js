import React, { useContext } from 'react';
import TodoContext from '../context/todo/todoContext';
import '../auth/login.css';

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo } = todoContext;
  const { name, id } = todo;

  const onDelete = () => {
    deleteTodo(id);
  };
  return (
    <tr>
      <td>
        <a href="">{name}</a>
      </td>
      <td className="text-center">
        <input type="checkbox" style={{}} name="" id="" />
      </td>
      <td className="text-center">
        <button className="btn btn-danger" href="#" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
