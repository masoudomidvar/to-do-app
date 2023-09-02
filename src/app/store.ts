import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "@features/tasks";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "tasks",
  storage,
};

const persistedReducer = persistReducer(persistConfig, TasksReducer);

const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;
