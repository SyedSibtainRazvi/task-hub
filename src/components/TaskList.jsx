import React from 'react'
import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
const {tasks} = useContext(TaskListContext)

  return (
    <>
    <ul>
        {tasks.map(task => {
            return <Task />
        })}
    </ul>
    </>
  )
}

export default TaskList