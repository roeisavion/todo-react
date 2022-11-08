import { React } from "react";
import { Button } from 'react-bootstrap';

export const Task = ({ taskName, id, markTask, removeTask, isDone }) => {
  return (
    <div className="todo" onClick={() => markTask(id, isDone)}>
      <span style={{ textDecoration: isDone ? "line-through" : "" }}>{taskName}</span><div>
        <Button variant="outline-danger" onClick={() => removeTask(id)}>✕</Button>
      </div>
    </div>
  );
};
