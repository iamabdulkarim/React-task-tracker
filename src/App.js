import {useState} from 'react';
import  Header  from "./components/Header";
import  Tasks  from './components/Tasks';
function App() {
  const [tasks] = useState( [
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
  
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
    
  );
}

export default App;
