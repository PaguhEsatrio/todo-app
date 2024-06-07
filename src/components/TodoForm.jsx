import React, { useState } from 'react'

const TodoForm = ({ tambah }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    tambah(title)
    setTitle('') 
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
      <form
        onSubmit={(event) => {
          handleSubmit(event)
        }}
        className="flex space-x-2"
      >
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" 
          onChange={(event) => handleChangeTitle(event)}
          value={title} 
        />
        <button type="submit" className="btn btn-accent">Add</button>
      </form>
  
  )
}

export default TodoForm
