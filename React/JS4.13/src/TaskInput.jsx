import React, { useState } from "react";

const TaskInput = ({ onAddTask, selectedCategory }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask({ title, category: selectedCategory, id: Date.now() });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
      <div class="col">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"/>
      </div>
      <div class="col-auto px-0 mx-0 mr-2">
        <button class="btn btn-primary">Добавить задачу</button>
      </div>
    </form>
    
  );
};

export default TaskInput