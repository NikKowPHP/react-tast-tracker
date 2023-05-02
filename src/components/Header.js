import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Button } from './Button';

export const Header = ({ title, onShowForm, showAdd}) => {
	return (
		<header className='header'>
			<h1 >{title}</h1>
			<Button color={showAdd ? 'Red': 'Green'} text={showAdd ? 'Close': 'Add'} onClick={onShowForm} />
		</header>
	)

}

const headingStyle = {
	color: 'red',
	backgroundColor: 'black'
}

Header.defaultProps = {
	title: 'task tracker', 

}
Header.propTypes = {
	title: PropTypes.string.isRequired,
}
