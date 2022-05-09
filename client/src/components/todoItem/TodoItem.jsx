import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeState } from '../../redux/action/todoActionCreator';

function TodoItem({ id, title, done, number }) {
  const dispatch = useDispatch();

  const deleteHandler = (event) => {
    const itemId = event.target.dataset.id;
    dispatch(deleteTodo(itemId));
  };
  const changeStateHandler = (event) => {
    const itemId = event.target.dataset.id;
    dispatch(changeState(itemId));
  };
  return (
    <div className={`${done ? 'done' : 'undone'} todoitem`}>
      <div>{number}.</div>
      <div >
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            data-id={id}
            checked={done ? 'checked' : ''}
            onChange={(event) => changeStateHandler(event)}
          />
        </div>
      </div>
      <div className="textWrap">
        <p >{title}</p>
      </div>
      <div>
        <button
          className="delete btn btn-primary"
          type="button"
          data-id={id}
          onClick={(event) => deleteHandler(event)}
        >
          Delete
        </button>
        
      </div>
    </div>
  );
}

export default TodoItem;