import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'



const App=()=> {
  const[tasks , setTasks]= useState([
      {
      id:1,
      text:'Doctor Appointment',
      day: 'May 30th at 2:30pm',
      reminder:true,
  
      },
      {
      id:2,
      text:'Springworks',
      day: 'May 30th at 2:30pm',
      reminder:false,
      },
      {
      id:3,
      text:'Exercise',
      day: 'May 30th at 2:30pm',
      reminder:true,
      }
  ]
  

  )

  return (
  <div className='container'>
    <Header title='Task Tracker' />
    <Tasks tasks={tasks}/>
  </div>
  
  );
}

export default App;
