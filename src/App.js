import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react' 

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
 
  const handleChange=(event)=>{
    setNewTask(event.target.value);
  }
   const addTask = () => {
    const newTodoList=[...todoList,newTask];
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input　onChange = {handleChange}/>
        <button onClick = {addTask}>クリックして！</button>
      </header>
      <div className="text">
      {todoList.map((task) =>{
        return <h1 className="text">{task}</h1>;
      })}
      </div>
    </div>
  );
}

export default App;
