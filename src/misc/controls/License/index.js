import React, { useEffect, useState } from 'react';

//import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/macro';
//import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
//import Typography from '@mui/material/Typography';

// import cc_zero from './images/cc-zero.svg';
// import cc_by from './images/by.svg';
// import cc_by_sa from './images/by-sa.svg';
// import cc_by_nc from './images/by-nc.svg';
// import cc_by_nc_sa from './images/by-nc-sa.svg';
// import cc_by_nd from './images/by-nd.svg';
// import cc_by_nc_nd from './images/by-nc-nd.svg';
import Select from '../../Select';

// const useStyles = makeStyles((theme) => ({
// 	boxGray: {
// 		marginBottom: '.5em',
// 		marginTop: '.5em',
// 	},
// 	link: {
// 		marginTop: '.5em',
// 		wordBreak: 'break-word',
// 	},
// }));

export default function License(props) {
	//const classes = useStyles();
	const [OAAcc, setOAAcc] = useState();
	//const [SLOAAcc, setSLOAAcc] = useState()
	//const { i18n } = useLingui();

	// const handleLicenseChange = (event) => {
	// 	props.onChange(event.target.value);
	// };

	const handleOAACCChange = (event) => {
		props.onChange(event.target.value);
	};

	// const handleGroupChange = (event) => {
	// 	props.onChange(event.target.value);
	// };

	//let image = null;
	// let link = '';
	//let description = '';

	// eslint-disable-next-line no-useless-escape
	//const reVersion = new RegExp('[0-9]+.[0-9]+$');

	useEffect(() => {
		const getUsers = async () => {
			const accOa = await fetch('http://45.136.254.239:9600/getbots');
			const DataAcc = await accOa.json();
			setOAAcc(DataAcc);
		};

		getUsers();

		return () => {};
	}, []);

	//let version = 'none';
	//const matches = props.license.match(reVersion);
	//if (matches !== null) {
	//version = matches[0];
	//}
	//console.log(props.license)
	// const which = props.license.replace(reVersion, '').trim();

	// switch (which) {
	// 	case 'CC0':
	// 		image = cc_zero;
	// 		link = 'https://creativecommons.org/licenses/zero/1.0/';
	// 		description = i18n._(
	// 			t`The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.`
	// 		);
	// 		break;
	// 	case 'CC BY':
	// 		image = cc_by;
	// 		link = `https://creativecommons.org/licenses/by/${version}/`;
	// 		description = i18n._(
	// 			t`This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.`
	// 		);
	// 		break;
	// 	case 'CC BY-SA':
	// 		image = cc_by_sa;
	// 		link = `https://creativecommons.org/licenses/by-sa/${version}/`;
	// 		description = i18n._(
	// 			t`This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.`
	// 		);
	// 		break;
	// 	case 'CC BY-NC':
	// 		image = cc_by_nc;
	// 		link = `https://creativecommons.org/licenses/by-nc/${version}/`;
	// 		description = i18n._(
	// 			t`This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator.`
	// 		);
	// 		break;
	// 	case 'CC BY-NC-SA':
	// 		image = cc_by_nc_sa;
	// 		link = `https://creativecommons.org/licenses/by-nc-sa/${version}/`;
	// 		description = i18n._(
	// 			t`This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.`
	// 		);
	// 		break;
	// 	case 'CC BY-ND':
	// 		image = cc_by_nd;
	// 		link = `https://creativecommons.org/licenses/by-nd/${version}/`;
	// 		description = i18n._(
	// 			t`This license allows reusers to copy and distribute the material in any medium or format in unadapted form only, and only so long as attribution is given to the creator. The license allows for commercial use.`
	// 		);
	// 		break;
	// 	case 'CC BY-NC-ND':
	// 		image = cc_by_nc_nd;
	// 		link = `https://creativecommons.org/licenses/by-nc-nd/${version}/`;
	// 		description = i18n._(
	// 			t`This license allows reusers to copy and distribute the material in any medium or format in unadapted form only, for noncommercial purposes only, and only so long as attribution is given to the creator.`
	// 		);
	// 		break;
	// 	default:
	// 		break;
	// }

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Select label={<Trans>เลือกแอคเคาท์ LINE OA</Trans>} value={props.license} onChange={handleOAACCChange}>
					{OAAcc &&
						OAAcc.map((item, ini) => {
							return (
								<MenuItem key={item.botId} value={ini}>
									{item.name}
								</MenuItem>
							);
						})}
				</Select>
			</Grid>
			{/* <Grid item xs={12}>
				<Select label={<Trans>เลือกกลุ่มที่ต้องการแจ้งสตรีมมิ่ง</Trans>} value={props.license} onChange={handleGroupChange}>
					<MenuItem value="none">ทั้งหมด</MenuItem>
					<MenuItem value="CC0 1.0">กลุ่มประเภท1</MenuItem>
					<MenuItem value="CC BY 4.0">กลุ่มประเภท2</MenuItem>
					<MenuItem value="CC BY-SA 4.0">กลุ่มประเภท3</MenuItem>
					<MenuItem value="CC BY-NC 4.0">กลุ่มประเภท4</MenuItem>
					<MenuItem value="CC BY-NC-SA 4.0">กลุ่มประเภท5</MenuItem>
					<MenuItem value="CC BY-ND 4.0">กลุ่มประเภท6</MenuItem>
					<MenuItem value="CC BY-NC-ND 4.0">กลุ่มประเภท7</MenuItem>
				</Select>
			</Grid> */}
			{/* {OAAcc[props.license].length !== 0 && (
				<Grid item xs={12}>
					<div className="">
						<Typography>{OAAcc[props.license].basicSearchId}</Typography>
						
					</div>
				</Grid>
			)} */}
			{/* {OAAcc[props.license].iconUrl !== null && (
				<Grid item xs={12}>
					
						<img src={OAAcc[props.license].iconUrl} alt={OAAcc[props.license].name} />
				
				</Grid>
			)}  */}
		</Grid>
	);
}

License.defaultProps = {
	license: '',
	onChange: function (license) {},
};
