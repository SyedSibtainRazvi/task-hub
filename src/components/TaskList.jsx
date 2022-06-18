import React from 'react'
import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';


const TaskList = () => {
  const { tasks } = useContext(TaskListContext)

  return (
    <div>
      {tasks.length ?
        <ul style={{
          width: "90%",
          margin: 'auto',
          maxHeight: '300px',
          overflow: 'hidden',
          overflowY: 'auto'
        }}>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul> :
        <div style={{
          color: '#777',
          textAlign: 'center',
          fontSize: '18px',
          marginTop: '20px'
        }}> No Tasks </div>
      }
    </div>
  )
}

export default TaskList