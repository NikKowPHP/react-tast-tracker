import PropTypes from 'prop-types'
import React, { Component } from 'react';

export const Button = ( {color, text}) => {
	return (
		<button style={{ backgroundColor: color}} className="btn" >
			{text}
		</button>
	)

}