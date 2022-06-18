import React from 'react';
import './TaskForm.css';

import { TaskListContext } from '../context/TaskListContext'
import { useState } from 'react';
import { useContext } from 'react';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const { addTask, clearList } = useContext(TaskListContext)

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask(title);
        setTitle("");

    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input value={title} onChange={handleChange} type="text" placeholder='Add Task...' required className='task-input' />
                <div className='buttons'>
                    <button type='submit' className='btn add-task-btn'>Add Task</button>
                    <button onClick={clearList} className='btn clear-btn'>Clear</button>
                </div>
            </form>
        </>
    )
}

export default TaskForm