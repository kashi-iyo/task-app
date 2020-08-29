import React, {useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext)

    return (
        <li className="list" >
            <div className="task">{task.title}</div>
            <div className="button">
                <button onClick={() => removeTask(task.id)}>
                    削除
                </button>
                <button onClick={() => findItem(task.id)}>
                    編集
                </button>
            </div>
        </li>
    )
}

export default Task
