import{ useState } from 'react'
import React, { Component } from 'react';
import { Header } from './components/Header';
import  { Tasks }  from './components/Tasks';
class App extends Component {
  render() {

	const [tasks, setTasks] = useState([
	{
		id:1,
		text: 'doctors',
		day: '10.05.15',
		reminder: true,
	},
	{
		id:2,
		text: 'meeting',
		day: '10.05.15',
		reminder: true,
	},
	{
		id:3,
		text: 'food shopping',
		day: '10.05.15',
		reminder: true,
	}

	])

    return (
      <div className='container'>
        <Header  />
			  <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default App;
