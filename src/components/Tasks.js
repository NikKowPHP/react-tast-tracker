import React from 'react'
import{ useState } from 'react'



export const Tasks = () => {
	const [task, setTasks] = useState(
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
	})
	return (
		<div>

			{tasks.map((task) => 
			(<h3 key={task.id}> {task.text}</h3>
			
			))}

		</div>
	)
}
