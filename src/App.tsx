import "./App.css";
import { Provider } from "react-redux";
import React from 'react';
import store, { persistor } from "@app";
import ToDoPage from "./pages/ToDoPage";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="w-screen flex justify-center pt-16">
          <ToDoPage />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
