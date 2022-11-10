import {React, useState, useEffect} from "react";
import "./App.css";
import { Button, Card } from 'react-bootstrap';
import { getAllTasks,createTask,deleteTask, updateTaskStatus, backupToMongo } from './services/TasksService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TasksForm } from "./components/TasksForm";
import { Task } from "./components/Task";

const buttonStyle = {
  'position' : 'absolute',
  'right' : '30px',
  'bottom' : '30px',
} 

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (text) => {
    await createTask(text);
    const newTasks = await getAllTasks()
    setTasks(newTasks);
  };

  const markTask = async (id,isdone) => {
    await updateTaskStatus(id,isdone);
    const newTasks = await getAllTasks()
    setTasks(newTasks);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    const newTasks = await getAllTasks()
    setTasks(newTasks);
  };

  useEffect(async () => {
    const tasks = await getAllTasks()
    setTasks(tasks);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Task App</h1>
        <TasksForm addTask={addTask} />
        <div className="TaskContainer">
          {tasks.map((task) => (
            <Card>
              <Card.Body>
                <Task
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                markTask={markTask}
                removeTask={removeTask}
                isdone ={task.isdone}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
        <Button variant="info" onClick={() => backupToMongo()} style={buttonStyle}>Backup To Mongo</Button>
      </div>
    </div>
  );
}

export default App;