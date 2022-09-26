import Task from './Task'
const Tasks = ({tasks,onDelete,onTasksToggle}) => {
  
  return (
    <>
     {tasks.map((task) => (
       <Task key={task.id} task={task} onDelete={onDelete} onTaskToggle={onTasksToggle}/>
      ))}
    </>
  )
}

export default Tasks