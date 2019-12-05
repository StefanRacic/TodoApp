import React, { useEffect, Fragment, useContext } from 'react';
import TodoContext from '../context/todo/todoContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import AuthContext from '../context/auth/authContext';

const Table = () => {
  const authContext = useContext(AuthContext);

  const todoContext = useContext(TodoContext);
  const { getTodos, todos } = todoContext;

  useEffect(() => {
    if (authContext.token !== null) {
      authContext.loadUser();
    }
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
          <TodoForm />
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th className="w-100" scope="col">
                  Name
                </th>
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
