import TaskForm from "./components/taskform/TaskForm";
import TasksColumn from "./components/tasks/TasksColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import React, { useEffect, useState } from "react";
 const oldTasks =localStorage.getItem('tasks');
 console.log(oldTasks);
const App = () => {
  const [tasks ,setTasks] =useState(JSON.parse(oldTasks) || []);
  useEffect(() =>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])
  const handleDelete = (taskIndex) =>{
    const newTasks = tasks.filter((item,index) => index !== taskIndex);
    setTasks(newTasks);
  }
  // console.log("tasks",tasks);
  return (
    <div className="flex place-content-center my-10">
      <div className="max-w-[1000px] border p-8  rounded-md shadow-sm ">
        <TaskForm  setTasks={setTasks}/>
        <div className="  flex justify-between  items-center my-10">
          <TasksColumn title="Todo" icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete}/>
          <TasksColumn title="Doing" icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete} />
          <TasksColumn title="Done" icon={doneIcon}  tasks={tasks} status='done' handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default App;
