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
