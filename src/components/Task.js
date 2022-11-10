import { React } from "react";
import { Button } from 'react-bootstrap';
import './Task.css'

export const Task = ({ taskname, id, markTask, removeTask, isdone }) => {
  return (
    <div className="Task" onClick={() => markTask(id, isdone)}>
      <span className={isdone ? "done" : ""}>{taskname}</span><div>
        <Button variant="outline-danger" onClick={() => removeTask(id)}>✕</Button>
      </div>
    </div>
  );
};
