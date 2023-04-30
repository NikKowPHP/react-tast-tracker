import React from 'react'

import { useState } from 'react'

export const AddTask = () => {
	return (
		<form className='add-form'>
			<div className='form-control'>
				<label>task</label>
				<input type='text' placeholder='Add Task' />
			</div>
			<div className='form-control'>
				<label>Day & time</label>
				<input type='text' placeholder='Set date' />
			</div>

			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input type='checkbox' />
			</div>
			<input type='submit' value='Save Task' className='btn btn-block'/>

		</form>
	)
}
