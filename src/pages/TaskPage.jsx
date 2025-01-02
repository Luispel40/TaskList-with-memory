import { useSearchParams } from "react-router-dom"
import "./TaskPage.css"
import { ChevronLeft } from "lucide-react"
function TaskPage() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (

        <div className="task__page__container">
            <div className="task__page__header">
                <button
                onClick={() => window.history.back()}><ChevronLeft /></button>
            <h1>Detalhes da tarefa</h1>
            </div>
            <div className="task__page">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TaskPage