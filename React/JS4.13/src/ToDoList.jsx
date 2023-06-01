import React, { useState } from "react";
import TaskInput from "./TaskInput";

function ToDoList() {
  const categories = [
    { id: "personal", name: "Личные", icon: "🏠" },
    { id: "work", name: "Работа", icon: "💼" },
    { id: "study", name: "Учеба", icon: "📚" },
    { id: "leisure", name: "Отдых", icon: "⛱️" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [tasks, setTasks] = useState([]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks = tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <div>
      <nav class="navbar navbar-light bg-light d-flex justify-content-center">
        <form class="form-inline">
        {categories.map(category => (
          <button class="btn btn-outline-primary" type="button" key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.icon} {category.name}
          </button>
        ))}
        </form>
      </nav>      
      <TaskInput onAddTask={handleAddTask} selectedCategory={selectedCategory} />
      </div>
      <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
        {filteredTasks.map(task => (          
          <div class="card">
            <div class="card-body">
              {task.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ToDoList;
