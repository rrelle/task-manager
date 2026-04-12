'use client'

import {useState, useEffect } from 'react';

import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import TaskStats from './TaskStats';

export default function TaskBoard() {()
    const [tasks, setTasks] = useState([]);


    function handleAdd(task) {
        setTasks([...tasks,{id:crypto.randomUUID(),title:task,done:false}]);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <AddTaskForm onAdd={handleAdd} />
            <TaskList tasks={tasks} />
            <TaskStats tasks={tasks} />
        </div>
    );
}

    