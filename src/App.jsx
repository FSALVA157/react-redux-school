// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './store/slices/todos/todosSlice';

function App() {

  const {todos} = useSelector((state)=>state.todos)
  const dispatch = useDispatch();
  

  const onSubmit = (event)=>{
    let dato = event.target[0].value;
    event.preventDefault();
    dispatch(addTodo(dato))
  }

  return (
    <div className="App">
      <div>
       <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Todos App</h1>
      <div>
        <ul>
          {
            todos.map((tarea) => (              
              <li key={tarea.todo}>{tarea.todo}</li>
            ))

          } 
        </ul>
      </div>
      
      <form onSubmit={onSubmit}>
        <label>
          Nueva Tarea:
          <input type="text"></input> 
        </label>
        
        {/* <button onClick={() => dispatch(addTodo("tarea 3"))}>
          Agregar Tarea
        </button> */}
      </form>
      
      
        
      
      
    </div>
  )
      }
export default App
