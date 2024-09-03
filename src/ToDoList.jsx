import { useState } from "react";

function ToDoList() {
    const [newTask,setNewTask] = useState("");
    const [tasks,setTasks] = useState(["Clean the kitchen","Walk the dog","Take Out the trash"]);
    const newList = tasks.map((item, index) => (
        <li key={index}>
            {item}
            <div className="hi">
                <button className="btns" onClick={()=>editTask(index)}>Edit</button>
                <button className="btns" onClick={()=>delTask(index)}>Delete</button>
            </div>
        </li>
    ));
    function delTask(index){
        const updatedTasks = tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    function addTask() {
        if (newTask.trim()) {
            setTasks(t => [...t,newTask])
        }
    }
    function editTask(index) {
        const updatedTask = prompt("Edit your task:", tasks[index]);
        if (updatedTask.trim()) {
            setTasks(tasks.map((task, i) => (i === index ? updatedTask : task)));
        }
    }
    return (
        <>
         <div id="form">
            <input onChange={(e)=>setNewTask(e.target.value)} id="input" type="text" placeholder="Enter a task"></input>
            <button id="button" onClick={addTask}>Add</button>
         </div>
         <div id="sho3ayb">
            <ul>
               {newList}
            </ul>
         </div>
        </>
    );
}

export default ToDoList;