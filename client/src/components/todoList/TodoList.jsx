import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import {selectTodo} from '../../redux/slicer/todoSlice';
import { getTodos } from '../../redux/action/todoActionCreator';
import { selectUser } from '../../redux/slicer/userSlice'

function TodoList() {
  const userId = useSelector(selectUser).userId;

  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTodos(userId));
  }, []);

  return (
    <div className="todolist">
      {todos.map((item, index) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          done={item.done}
          number={index + 1}
        />
      ))}
    </div>
  );
}

export default TodoList;