import React from "react";
import "./App.css";
import TodoList from "./TodoList";
<link
  href="https://unpkg.com/css.gg@2.0.0/icons/css/list.css"
  rel="stylesheet"></link>;

function App() {
  return (
    <div className="app">
      <h1>
        <i class="gg-list"></i> minimal to-do list {""}
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
