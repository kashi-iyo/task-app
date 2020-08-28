import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

function TaskList() {
    const {tasks} = useContext(TaskListContext)

    return (
        <div>
            <ul>
                {tasks.map(task => {
                    return  <Task  />
                })}
            </ul>
        </div>
    )
}

export default TaskList
