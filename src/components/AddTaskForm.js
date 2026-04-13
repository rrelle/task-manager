'use client'
import { useState } from 'react';
export default function AddTaskForm({ onAdd }) {
    const [task, setTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task);
            setTask('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 p-2 border rounded-l text black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600">
                Add
            </button>
        </form>
    );
}