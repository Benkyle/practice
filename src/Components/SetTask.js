import React, { useState } from "react";
import "./setTask.css";

function SetTask() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Record React Lectures", isCompleted: true },
    { id: 2, taskName: "Edit Lecturs", isCompleted: false },
    { id: 3, taskName: "Send Lecture to Bright for Audit", isCompleted: false },
  ]);

  const [show, setShow] = useState(true)

  function handleDelete(id) {
    // console.log(id)
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <h1>Task List</h1>
        <button className="delete" onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {show && tasks.map((tasks) => {
          return (
            <li key={tasks.id} className={tasks.isCompleted ? "complete" : "incomplete"}>
              <span>
                {tasks.id} . {tasks.taskName}
              </span>
              <button onClick={() => handleDelete(tasks.id)} className="delete">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SetTask;
