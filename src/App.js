import {React, useState, useEffect} from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import { getAllTasks,createTask,deleteTask, updateTaskStatus } from './services/TasksService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TasksForm } from "./components/TasksForm";
import { Task } from "./components/Task";


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (text) => {
    await createTask(text);
    const newTodos = await getAllTasks()
    setTasks(newTodos);
  };

  const markTask = async (id,isDone) => {
    await updateTaskStatus(id,isDone);
    const newTodos = await getAllTasks()
    setTasks(newTodos);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    const newTodos = await getAllTasks()
    setTasks(newTodos);
  };

  useEffect(async () => {
    const tasks = await getAllTasks()
    setTasks(tasks);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo App</h1>
        <TasksForm addTask={addTask} />
        <div>
          {tasks.map((task) => (
            <Card>
              <Card.Body>
                <Task
                key={task._id}
                id={task._id}
                taskName={task.task}
                markTask={markTask}
                removeTask={removeTask}
                isDone ={task.isDone}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;