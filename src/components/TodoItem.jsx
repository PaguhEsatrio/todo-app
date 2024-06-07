import React from 'react';

const TodoItem = ({ todo, coret, hapus, index }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' };
    } else {
      return { textDecoration: 'none' };
    }
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="flex justify-center items-center p-4">
          <img  src={`https://source.unsplash.com/400x400?${todo.title}`} alt="Shoes" className="h-40 w-auto"  style={{ height: '100px' }} />
        </figure>
        <div className="card-body flex justify-between items-center p-4">
          <div className="flex items-center"> {/* Added flex container for checkbox, title, and delete icon */}
            <input
              type="checkbox"
              onChange={() => coret(todo.id)}
              className="mr-2" // Add margin to separate checkbox from title
            />
            <h2 className="card-title" style={getTodoTitleStyle()}>{todo.title}</h2>
          </div>
          <span
            className="cursor-pointer"
            onClick={() => hapus(todo.id)}>
            ❌
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
