import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from '../todo/todoContext';
import todoReducer from '../todo/todoReducer';
import {
  GET_TODOS,
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: null,
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Get Todos
  const getTodos = async () => {
    const config = {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    };
    try {
      const res = await axios.get('/api/todos', config);

      dispatch({ type: GET_TODOS, payload: res.data });
    } catch (error) {}
  };
  // Get Todo

  // Add Todo

  // Delete Todo

  // Update Todo

  // Clear todos

  // Set Current Todo

  // Clear Current Todo

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        error: state.error,
        getTodos
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
