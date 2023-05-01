import React from 'react'
import { useState } from 'react'

export const AddTask = ({onAdd}) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if(!text) {
			alert('there is no text in a task field');
			return;
		}

		onAdd({text,day,reminder})

		setText('')
		setDay('')
		setReminder('')
	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>task</label>
				<input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className='form-control'>
				<label>Day & time</label>
				<input type='text' placeholder='Set date' onChange={(e) => setDay(e.target.value)}/>
			</div>

			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
			</div>
			<input type='submit' value='Save Task'  className='btn btn-block'/>

		</form>
	)
}
