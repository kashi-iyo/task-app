import React, {createContext, useState} from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { task: "初投稿", id: 1 },
        { task: "2度目の投稿", id: 2 },
        { task: "こんにちは", id: 3 }
    ])

    return (
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider