import React from 'react'
import TaskList from './components/TaskList'
import './App.css'
import TaskListContextProvider from './context/TaskListContext'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <div className='main'></div>
        <TaskList />
        </div>

      </div>
    </TaskListContextProvider>
  )
}

export default App;
