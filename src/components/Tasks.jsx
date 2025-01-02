import { ChevronRight, Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "./Tasks.css"

function Tasks({tasks, onTaskClick, taskDelete}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="task">
            {tasks.map((task) =>
                <li key={task.id}>
                    <button
                        onClick={() => onTaskClick(task.id)}
                    className={`${task.isCompleted && "completed"}`}
                    >
                        {task.title}
                    </button>
                    <button
                        onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRight />
                    </button>
                    <button onClick={() => taskDelete(task.id)}>
                        <Trash />
                    </button>
                </li>)}

        </ul>
    )
}

export default Tasks