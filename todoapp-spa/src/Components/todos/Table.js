import React, { useContext, useEffect, Fragment } from 'react';
import TodoContext from '../context/todo/todoContext';
import TodoItem from './TodoItem';

const Table = () => {
  const todoContext = useContext(TodoContext);
  const { getTodos, todos } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  if (todos !== null && todos.length === 0) {
    return <h3>Please add a Todo Items...</h3>;
  }

  return (
    <Fragment>
      {todos !== null ? (
        <div className="container">
          <h2 className="pt-5">Todo's App</h2>
          <a href="">
            <i className="material-icons">add</i>
          </a>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Finished</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        console.log('nothing')
      )}
    </Fragment>
  );
};

export default Table;
