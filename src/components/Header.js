import PropTypes from 'prop-types'
import React, { Component } from 'react';

export const Header = ({ title }) => {
	return (
		<header>
			<h1 >{title}</h1>
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
