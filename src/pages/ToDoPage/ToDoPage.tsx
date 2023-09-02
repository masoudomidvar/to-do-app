import AddTask from "./AddTask";
import React from "react";
import TaskList from "./TaskList";

const ToDoPage = () => {
  return (
    <div className="w-1/2">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default ToDoPage;
