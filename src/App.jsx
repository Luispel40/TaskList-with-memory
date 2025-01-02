import { useEffect } from "react";
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import "./index.css"
import { useState } from "react"
import { v4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    });

    setTasks(newTasks);
  }

  function taskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(taskTitle, taskDescription) {
    const newTask = {
      id: v4(),
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="column">
        <h1 className=" text-3xl">Gerenlciador de Tarefas</h1>
        <AddTask 
          onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          taskDelete={taskDelete}
        />
      </div>
    </div>
  )

}

export default App