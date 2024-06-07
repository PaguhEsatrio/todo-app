import React from 'react';
import TodoItem from './TodoItem'; 

const TodoList = ({ todos, coret, hapus }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mt-100">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          coret={coret}
          hapus={hapus}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoList;
