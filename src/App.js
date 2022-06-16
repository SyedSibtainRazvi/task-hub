import React from 'react'
import TaskList from './components/TaskList'
import TaskListContextProvider from './context/TaskListContext'

const App = () => {
  return (
    <TaskListContextProvider>
      <div>
        Hello
        <TaskList />
      </div>
    </TaskListContextProvider>
  )
}

export default App;
