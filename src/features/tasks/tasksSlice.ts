import { TaskType } from "./type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { tasks: TaskType[] } = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<TaskType>) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter(
        (currentTask) => currentTask.id !== payload.id
      );
    },
    markAsDone: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.map((currentTask) =>
        currentTask.id !== payload.id
          ? currentTask
          : { ...currentTask, isDone: !currentTask.isDone }
      );
    },
    clearAllDone: (state) => {
      state.tasks = state.tasks.filter(({ isDone }) => !isDone);
    },
    clearAll: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, markAsDone, clearAllDone, clearAll } =
  tasksSlice.actions;

export default tasksSlice.reducer;
