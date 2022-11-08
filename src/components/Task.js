import { React } from "react";
import { Button } from 'react-bootstrap';
import './Task.css'

export const Task = ({ taskName, id, markTask, removeTask, isDone }) => {
  return (
    <div className="todo" onClick={() => markTask(id, isDone)}>
      <span className={isDone ? "done" : ""}>{taskName}</span><div>
        <Button variant="outline-danger" onClick={() => removeTask(id)}>✕</Button>
      </div>
    </div>
  );
};
