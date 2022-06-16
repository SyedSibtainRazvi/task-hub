import React from 'react'
import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskList = () => {
const {tasks} = useContext(TaskListContext)

  return (
    <div>TaskList</div>
  )
}

export default TaskList