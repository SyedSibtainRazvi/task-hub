import React from "react";
import { useState } from "react";
import { createContext, } from "react";


export const TaskListContext = createContext();

const TaskListContextProvider = props => {

    const [tasks, setTasks] = useState([
        { title: 'read the book', id: 1 },
        { title: 'read  book', id: 2 },
        { title: 'read sleep book', id: 3 },
        { title: 'read 5 book', id: 4 }
    ]);


    return (
        <TaskListContext.Provider value={{ tasks }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;