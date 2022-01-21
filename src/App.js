import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

//this is the apps logic, the brain

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc app',
      day: 'March, 21',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meet at school',
      day: 'Feb, 21',
      reminder: true,
    },
    {
      id: 3,
      text: 'Pet drive',
      day: 'April, 25',
      reminder: false,
    },

  ])

  //Add Task
// we are specifically using this on the task givin, we can use on anything logical lol
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  //Delete task, we set this gloablly in APP.js so we can access this fromt he tasks file
// we are specifically using this on the id givin, we can use on anything logical lol
  const deleteTask = (id) => {
    console.log('You have deleted Task:', id)
    // here we are filtering the task by their id
    setTasks(tasks.filter((task) => task.id !== id))

  }

  //Toggle reminder
  const toggleReminder = (id) => {
    console.log(`You are double clicking: ${id}`)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      {/* <h1> Hello From React</h1> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* Here we are setting the check up for if no tasks are listed */}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks Here')}
    </div>
  );
}

export default App;

// Create a new react app

// Create a new Hulu Component

// pass an object with properties showTitle, numberOfSeason, genre, and rating to the component
// Return the show information formatted however you like (all properties must be displayed in the browser)
// Call the component from the default parent component

// Style the default parent component
