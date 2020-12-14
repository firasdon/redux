import React from 'react'
import './App.css';
import AddToddo from './compenent/AddToddo';
import TodoList from './compenent/TodoList';

function App() {
  return (
    <div className="App">
      <AddToddo/>
      <TodoList/>
    </div>
  );
}

export default App;
