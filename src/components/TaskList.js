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