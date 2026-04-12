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

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task..."
                className="border p-2 text-black"
            />
            <button type="submit" >Add</button>
        
        </form>
    );
}