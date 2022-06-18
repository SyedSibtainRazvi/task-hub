import React from 'react'
import TaskList from './components/TaskList'
import './App.css'
import TaskListContextProvider from './context/TaskListContext'
import Header from './components/Header'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <h3 className='hide-mobile'>"Discipline is choosing between what you want now and what you want most.” <br /> <br /> <i>~Abraham Lincoln~</i></h3>
        <div className='app-wrapper'>
          <Header />
          <div className='main'></div>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App;
