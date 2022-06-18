import React from "react";
import { useState } from "react";
import { createContext, } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {

    const [tasks, setTasks] = useState([
        { title: 'read the book', id: 1 },
        { title: 'read  book', id: 2 },
        { title: 'read sleep book', id: 3 },
        { title: 'read 5 book', id: 4 }
    ]);

    const [editItem, setEditItem] = useState(null)

    const addTask = title => {
        setTasks([...tasks, {title, id: uuidv4() }])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([])
    } 

    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem (item)
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? {title, id} : task))

        console.log(newTasks)

        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;