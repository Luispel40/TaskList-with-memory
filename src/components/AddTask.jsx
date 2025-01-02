import "./AddTask.css"
import { useState } from "react"

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="add-task">
            <input
                type="text"
                placeholder="Adicionar nova tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder="Adicionar descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        alert("Preencha todos os campos");
                        return;
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}>
                Adicionar
            </button>
        </div>
    )
}
export default AddTask