import {useState,useEffect} from 'react';
import  Header  from "./components/Header";
import  Tasks  from './components/Tasks';
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState( [])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])


  //fetch tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000 +1);
    const newTask = {id , ...task}
    setTasks([...tasks , newTask])
  }

  const onDelete = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const onToggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  } 
  
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask addNewTask={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onTasksToggle={onToggleReminder}/>) : 'No Task To Show '}
      
    </div>
    
  );
}

export default App;
