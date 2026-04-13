// COMPONENT: TaskBoard
// PURPOSE: Main component that manages all task data and logic.
// TYPE: Client Component because it uses useState and useEffect.
// It passes data down to child components and receives actions back via props.
'use client'
// State that stores all tasks.
// We use state so React can re-render when tasks change.

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
// useEffect saves tasks to localStorage whenever tasks change.
// This allows tasks to persist even after page refresh.

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

// Adds a new task using a unique ID.
// We use spread operator to create a NEW array instead of mutating the old one.
function handleAdd(title) {
  setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
}

    function handleAdd(task) {
        setTasks([...tasks, {id: crypto.randomUUID(), title: task, done: false}]);
    }
    

    // Removes a task from the list by filtering it out.
// filter() creates a new array without mutating the original.
    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    function handleToggle(id) {
        setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t));
    }
    

    // Removes all completed tasks at once by filtering out tasks marked as done.
    function handleClear() {
        setTasks(tasks.filter(t => !t.done));
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.done;
        if (filter === 'completed') return task.done;
        return true;
    });


    // Calculates the number of completed tasks dynamically.
// This is derived instead of stored to avoid duplicated state.
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
                // COMPONENT: AddTaskForm
// PURPOSE: Handles user input and sends new tasks to the parent component.
// Uses a controlled input where the value is stored in state.
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

    