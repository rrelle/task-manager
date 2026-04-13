'use client'

import {useState, useEffect} from 'react';

import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import TaskStats from './TaskStats';

export default function TaskBoard() {
    const [tasks, setTasks] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('tasks');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleAdd(task) {
        setTasks([...tasks, {id: crypto.randomUUID(), title: task, done: false}]);
    }
    
    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    function handleToggle(id) {
        setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t));
    }
    
    function handleClear() {
        setTasks(tasks.filter(t => !t.done));
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.done;
        if (filter === 'completed') return task.done;
        return true;
    });
const completed = tasks.filter(t => t.done).length;
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center">
            
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md border-4 border-gray-300">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Task Manager</h1>
            <AddTaskForm onAdd={handleAdd} />
            <div className="flex gap-2 mb-4 justify-center">
                <button onClick={() => setFilter('all')}
                    className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                >
                    All
                </button>
                <button onClick={() => setFilter('active')}
                    className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                >
                    Active
                </button>
                <button onClick={() => setFilter('completed')}
                    className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                >
                    Completed
                </button>
            </div>
            <TaskList 
                tasks={filteredTasks}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
            <TaskStats 
            total={tasks.length}
            completed={completed}
            onClear={handleClear} 
            />
            </div>
        </div>
    );
}

    