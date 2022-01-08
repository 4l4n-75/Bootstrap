import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreatetodoButton } from './CreateTodoButton';
import './App.css';

const todos=[
  {text:'Ver el contenido de Tecla', completed:true},
  {text:'Pasear a la mascota por la tarde', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text:'Cortar verduras', completed:false},
]
function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
        { todos.map(todo => (
         <TodoItem
           text={todo.text}
           completed={todo.completed}
         />
       ))}
      </TodoList>
      <CreatetodoButton />
    </>
  );
}
export default App;
