import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

import company_logo from './images/LOGO.webp';

const useStyles = makeStyles((theme) => ({
	Logo: {
		height: 17,
	},
}));

export default function Logo(props) {
	const classes = useStyles();

	let link = '#';

	// eslint-disable-next-line no-useless-escape
	return (
		<a href={link} className={classes.Logo} target="_blank" rel="noopener noreferrer">
			<img style={{ width: '20px' }} src={company_logo} alt="nook dev logo" />
		</a>
	);
}
