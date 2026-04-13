"use client";
export default function TaskCard({ id, title, done, onDelete, onToggle }) {
    return <div className="flex justify-between border p-2 my-2 bg-white text-black">
    <span onClick={() => onToggle(id)} className={done ? 'line-through text-gray-400 cursor-pointer' : 'cursor-pointer'}>
        {title}
    </span>
    <button onClick={() => onDelete(id)}>Delete</button>
    </div>
}
// Conditional styling: if task is completed, apply line-through style.