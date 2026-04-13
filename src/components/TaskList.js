// COMPONENT: TaskList
// PURPOSE: Displays all tasks by mapping over the tasks array.
// Each task is rendered as a TaskCard component.

import TaskCard from "./TaskCard";
export default function TaskList({ tasks, onDelete,ontoggle }) {
    return (
        <div>
                {tasks.map((task) => (
                <TaskCard key={task.id}{...task} onDelete={onDelete}
                ontoggle={ontoggle}/>
                ))}
        </div>
    );
}