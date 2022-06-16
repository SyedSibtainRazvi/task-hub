import React from "react";
import { useState } from "react";
import { createContext, } from "react";


export const TaskListContext = createContext();

const TaskListContextProvider = () =>{

    const [tasks, setTasks] = useState([
        {task: 'read the book', id: 1},
        {task: 'read the book', id: 2},
        {task: 'read the book', id: 3},
        {task: 'read the book', id: 4}
    ])
    return (
        <Div>
            Task List
        </Div>
    )
}

export default TaskListContextProvider;