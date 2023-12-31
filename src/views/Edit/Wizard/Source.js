import React from 'react';

import { Trans } from '@lingui/macro';
//import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Paper from '../../../misc/Paper';
import PaperHeader from '../../../misc/PaperHeader';

export default function Source(props) {
	return (
		<Paper xs={12} sm={9} md={6} marginBottom="6em" className="PaperM">
			<PaperHeader spacing={2} variant="h1" title={<Trans>Video setup</Trans>} onAbort={props.Abort} onHelp={props.onHelp} />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography>
						<Trans>
							เลือกว่าคุณดึงสตรีมจาก<strong>แหล่งเครือข่าย</strong> (เช่น กล้องเครือข่าย) หรือ <strong>เซิร์ฟเวอร์ RTMP ภายใน</strong> (เช่น OBS
							สตรีมไปยัง Restreamer)
						</Trans>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						{props.sources}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				{/* <Grid item xs={12}>
					<Button variant="outlined" fullWidth color="default" onClick={props.onAdvanced}>
						<Trans>Advanced setup</Trans>
					</Button>
				</Grid> */}
			</Grid>
		</Paper>
	);
}

Source.defaultProps = {
	onAbort: () => {},
	onHelp: () => {},
	onAdvanced: () => {},
	sources: [],
};
