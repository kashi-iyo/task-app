import React from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Header from './Header'
import TaskListContextProvider from '../context/TaskListContext'
import '../App.css'

const App = () => {
    return (
        <TaskListContextProvider>
            <Header />
            <div className="todo">
                <TaskForm />
                <TaskList />
            </div>
        </TaskListContextProvider>
    )
}

export default App