import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Button } from './Button';

export const Header = ({ title }) => {
	const onClick= () => {
		alert('click');
	}
	return (
		<header className='header'>
			<h1 >{title}</h1>
			<Button color='red' text='Add' onClick={onClick} />
			<Button color='green' text='Hello 1' />
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
