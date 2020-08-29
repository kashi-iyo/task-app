import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

function TaskList() {
    const {tasks} = useContext(TaskListContext)

    return (
        <div>
            {tasks.length ? (
                <ul>
                    {tasks.map(task => {
                        return  <Task task={task} key={task.id} />
                    })}
                </ul>
            ) : (
                <div>No Tasks</div>
            )}
        </div>
    )
}

export default TaskList
