import { useAppDispatch, useAppSelector } from "@app";
import {
  clearAllDone,
  deleteTask,
  markAsDone,
  clearAll,
} from "@features/tasks";
import { useMemo, useState } from "react";
import Checkbox from "@components/Checkbox";
import DeleteIcon from "@assets/icons/cross.svg";
import React from "react";

const TaskList = () => {
  const [filter, setFilter] = useState<"all" | "done" | "active">("all");

  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state) => state.tasks.tasks);

  const handleFilterSelect =
    (currentFilter: "all" | "done" | "active") => () => {
      setFilter(currentFilter);
    };
  const handleTaskDelete = (id: string) => () => {
    dispatch(deleteTask({ id }));
  };

  const handleTaskAsDone = (id: string) => () => {
    dispatch(markAsDone({ id }));
  };
  const handleClearAllDone = () => {
    dispatch(clearAllDone());
  };
  const handleClearAll = () => {
    dispatch(clearAll());
  };

  const { tasksToShow, activeTaskCount } = useMemo(() => {
    const tasksToShow = tasks.filter(
      ({ isDone }) =>
        filter === "all" ||
        (!isDone && filter === "active") ||
        (isDone && filter === "done")
    );
    const activeTaskCount = tasks.filter(({ isDone }) => !isDone).length;
    return { tasksToShow, activeTaskCount };
  }, [tasks, filter]);
  return tasks.length > 0 ? (
    <div className="border border-gray-400 rounded p-3">
      <div className="flex justify-between mb-2">
        <h6 className="text-lg font-bold">My Todo List</h6>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <ul className="w-full px-1">
        {tasksToShow.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center py-2 border-b cursor-pointer border-gray-400 ${
              task.isDone && "bg-[#f0f0f0]"
            }`}
            onClick={handleTaskAsDone(task.id)}>
            <div className="flex items-center gap-1">
              <Checkbox isChecked={task.isDone} />
              <p>{task.description}</p>
            </div>
            <button onClick={handleTaskDelete(task.id)} className="pr-2">
              <img src={DeleteIcon} />
            </button>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 pt-3 justify-between items-center">
        <p className="border-solid border-2 border-[#d6d6d6] rounded-lg px-3 py-2 flex justify-center items-center">
          {activeTaskCount} items left{" "}
        </p>
        <div>
          <button
            className={`border border-[#3b82f6] hover:bg-[#3b82f6] border-solid rounded-lg text-black font-bold py-2 px-4 ${
              filter === "all" && "bg-[#3b82f6]"
            }`}
            onClick={handleFilterSelect("all")}>
            All
          </button>
          <button
            className={`border border-[#f8d63c] hover:bg-[#f8d63c] mx-3 border-solid rounded-lg text-black font-bold py-2 px-4 ${
              filter === "active" && "bg-[#f8d63c]"
            }`}
            onClick={handleFilterSelect("active")}>
            Active
          </button>
          <button
            className={`border border-[#0a8a08] hover:bg-[#0a8a08] border-solid rounded-lg text-black font-bold py-2 px-4 ${
              filter === "done" && "bg-[#0a8a08]"
            }`}
            onClick={handleFilterSelect("done")}>
            Done
          </button>
        </div>
        <button
          className="border border-red-500 rounded-lg border-blue-[] hover:bg-red-500 text-black font-bold py-2 px-4"
          onClick={handleClearAllDone}>
          Clear completed
        </button>
      </div>
    </div>
  ) : null;
};

export default TaskList;
