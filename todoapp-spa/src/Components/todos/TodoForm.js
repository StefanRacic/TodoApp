import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TodoContext from '../context/todo/todoContext';

const TodoForm = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;

  useEffect(() => {
    setTodo({
      name: ''
    });
  }, [todoContext]);

  const [todo, setTodo] = useState({
    name: ''
  });

  const { name } = todo;

  const onChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    handleClose();

    setTodo({
      name: ''
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              placeholder="Enter Todo"
              onChange={onChange}
              required
            ></input>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add Todo
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodoForm;
