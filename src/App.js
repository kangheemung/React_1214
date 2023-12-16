import React, { useState } from 'react';
import './App.css';
import {Task} from "./Task"

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
                conpleted: false,
            };
            setTodoList([...todoList, task]);
            setNewTask(""); // Reset input field after adding task
        }
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };
    const completeTask = (id) =>{
        setTodoList(
            todoList.map((task)=>{
               return task.id === id ? {...task, completed: true} : task;

        })
      );
    };
    
    return (
        <div className="App">
          <header className="App-header">
            <input value={newTask} onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
          </header>
          <div className="text">
            {todoList.map((task) => {
                return( 
                <Task 
                    taskName={task.taskName} 
                    id = {task.id}
                    completed={task.completed} 
                    deleteTask={ deleteTask} 
                    completeTask={completeTask}
                />
                );
            })}
          </div>
        </div>
    );
};

export default App;
