import { useState } from "react";
import React, { Component } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
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
      }
    };
  }
  render() {

    const deleteTask = (id) => {
      this.state.setTasks(this.state.tasks.filter((task) => task.id !== id));
    }


    return (
      <div className="container">
        <Header />
        <Tasks tasks={this.state.tasks} onDelete={deleteTask} />
      </div>
    );
  }
}

export default App;
