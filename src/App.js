import {useState} from 'react';
import  Header  from "./components/Header";
import  Tasks  from './components/Tasks';
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, serShowAddTask] = useState(false)
  const [tasks,setTasks] = useState( [
    {
      id:1,
      text:'Doctors Appoinment',
      day:'Feb 5th at 2.30',
      reminder: true,
    },
    {
      id:2,
      text:'Meeting at School',
      day:'Feb 6th at 2.30',
      reminder: true,
    },
    {
      id:3,
      text:'Food Shopping',
      day:'Feb 5th at 3.30',
      reminder: false,
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000 +1);
    const newTask = {id , ...task}
    setTasks([...tasks , newTask])
  }

  const onDelete = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const onToggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  } 
  
  return (
    <div className='container'>
      <Header />
      {showAddTask && <AddTask addNewTask={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onTasksToggle={onToggleReminder}/>) : 'No Task To Show '}
      
    </div>
    
  );
}

export default App;
