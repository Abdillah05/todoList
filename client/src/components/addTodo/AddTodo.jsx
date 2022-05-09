import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action/todoActionCreator';
import { selectUser } from '../../redux/slicer/userSlice'

function AddTodo() {
  const userId = useSelector(selectUser).userId;
  const [value, setValue] = useState('');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    setValue(event.target.value);
  };
  const add = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo({ value, userId }));
    } else {
      setWarning('Empty field');
      setTimeout(() => {
        setWarning('');
      }, 2000);
    }
    setValue('');
  };

  return (
    <div className="addTodo">
      <form onSubmit={(event) => add(event)}>
        <div className="mb-3">
          <label className="form-label">TODO</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter what to do"
            value={value}
            onChange={(event) => inputHandler(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">AddTodo</button>
      </form>
      <div>{warning}</div>
    </div>
  );
}

export default AddTodo;