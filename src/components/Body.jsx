import React, { useState } from 'react';
import '../main.css';
import { getTodos } from '../database/todo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function Body({ onLogout, user }) {
    const [todos, setTodos] = useState(getTodos());

    const coret = (todoId) => {
        const updateCoret = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updateCoret);
    };

    const hapus = (todoId) => {
        const updateHapus = todos.filter((todo) => {
            return todo.id != todoId
        })
        setTodos(updateHapus)
    };

    const tambah = (todoTitle) => {
        if (todoTitle === "") {
            return
        }

        const newTodo = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false,
        }

        const updateTambah = todos.concat(newTodo)
        setTodos(updateTambah)
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="p-4">
                        <div className="flex justify-center items-center mt-3">
                            <p className="mr-3">Welcome {user.name}</p>
                            <button className="btn btn-outline btn-error" onClick={onLogout}>Logout</button>
                        </div>
                        <div className="flex justify-center border-solid border-2 border-black p-2 rounded-xl m-2 mt-3 min-w-80">
                            <figure>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0258/7053/2717/files/LOGO_B_1.png?height=628&pad_color=fff&v=1613679158&width=1200"
                                    alt="Shoes"
                                    style={{ height: '100px' }}
                                />
                            </figure>
                        </div>
                        <div className="card-body">
                            <TodoForm tambah={tambah} />
                        </div>
                    </div>
                </div>
            </div>
            


            <div className="flex justify-center mt-3"> 
                <TodoList todos={todos} coret={coret} hapus={hapus} />
            </div>




        </>
    );
}

export default Body;
