import { useState } from "react";
import React, { Component } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      tasks: [
        {
          id: 1,
          text: "doctors",
          day: "10.05.15",
          reminder: true,
        },
        {
          id: 2,
          text: "meeting",
          day: "10.05.15",
          reminder: true,
        },
        {
          id: 3,
          text: "food shopping",
          day: "10.05.15",
          reminder: true,
        },
      ],
      setTasks: (tasks) => {
        this.setState({ tasks });
      },

      showAddTask:false,

    };
  }
  render() {



    // Add task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000 ) + 1;
      const newTask = { id, ...task};
      this.state.setTasks([...this.state.tasks, newTask]);
    }

    // Delete Task

    const deleteTask = (id) => {
      this.state.setTasks(this.state.tasks.filter((task) => task.id !== id));
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      this.state.setTasks(this.state.tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
    }
    // Toggle new task form
    const toggleNewTask = () => {
      this.setState((prevState) => ({

        showAddTask: !prevState.showAddTask,
      }));

    };

    return (
      <div className="container">
        <Header onShowForm={toggleNewTask} showAdd={this.state.showAddTask} />
        { this.state.showAddTask &&  <AddTask onAdd={addTask} />}
        { this.state.tasks.length > 0 ? <Tasks tasks={this.state.tasks} onDelete={deleteTask} onToggle={toggleReminder} />: 'No Tasks to show'}
      </div>
    );
  }
}

export default App;
