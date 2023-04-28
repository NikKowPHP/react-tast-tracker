import React, { useState } from 'react'
import { Task } from './Task'


 export const Tasks = ({tasks, onDelete}) => {

	return (
		<div>

			{tasks.map((task) => 
			(<Task key={task.id} task={task}  onDelete={onDelete} />
			))}

		</div>
	)
}
