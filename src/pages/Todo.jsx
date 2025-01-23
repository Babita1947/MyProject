import { useState, useEffect } from 'react';
import { TodoProvider } from '../contexts/TodoContext';
import TodoForm from '../Components/TodoForm';
import TodoItem from '../Components/TodoItem';

function Todo() {
  const [todos, setTodos] = useState([]);

  const  addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    // or 
    // prev.map((eachVal) => {
    //   if(eachVal.id === id){
    //     todo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  // Local Storage
  useEffect(() => {
    // In Local Storage data is preserved into string formate
    const todos = JSON.parse(localStorage.getItem("todos")); // todos --> key //

    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
      
    </TodoProvider>
  )
}

export default Todo
