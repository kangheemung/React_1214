import React, { useState } from 'react';
import './App.css';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    const handleChange = (event) => {
      setNewTask(event.target.value);
    };

    const addTask = () => {
        if(newTask !== "") {
            const task = {
                id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
                taskName: newTask,
            };
            setTodoList([...todoList, task]);
            setNewTask(""); // Reset input field after adding task
        }
    };

    const deleteTask = (taskIdToDelete) => {
        setTodoList(todoList.filter((task) => task.id !== taskIdToDelete));
    };
    
    return (
        <div className="App">
          <header className="App-header">
            <input value={newTask} onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
          </header>
          <div className="text">
            {todoList.map((task) => {
                return (
                  <div key={task.id}>
                    <h1>{task.taskName}</h1>
                    <button onClick={() => deleteTask(task.id)}>XP</button>
                  </div>
                );
            })}
          </div>
        </div>
    );
};

export default App;
