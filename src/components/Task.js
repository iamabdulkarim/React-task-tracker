import { FaTimes } from "react-icons/fa";

const Task = ({task,onDelete,onTaskToggle}) => {
  return (
    <div className={`task  ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onTaskToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointrer'}} onClick={() => onDelete(task.id)}/> </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task