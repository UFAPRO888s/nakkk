import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Trans } from '@lingui/macro';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import welcomeImage from '../assets/images/LOGO.webp';
import Paper from '../misc/Paper';
import PaperThumb from '../misc/PaperThumb';

export default function Welcome(props) {
	const navigate = useNavigate();
	const { channelid: _channelid } = useParams();

	return (
		<Paper xs={12} md={6} className="PaperM">
			<Grid container justifyContent="center" spacing={2}>
				<Grid item xs={12}>
					<PaperThumb image={welcomeImage} title="Welcome to Xstreamer" height="200px" />
				</Grid>
				<Grid item xs={12}></Grid>
				<Grid item xs={12}>
					<Typography align="center">
						<Trans>
							ยินดีต้อนรับ สู่การ LOTTO LIVE <br />
							ถ่ายทอดสดสู่สายประชาชนทั่วทั้งโลก และ ดาวข้างเคียง โดย{' '}
							<Link color="secondary" target="_blank" href="#">
								LIVELOTTO
							</Link>
						</Trans>
					</Typography>
				</Grid>
				<Grid item xs={12}></Grid>
				<Grid item xs={12}>
					<Button fullWidth variant="outlined" color="primary" onClick={() => navigate(`/${_channelid}/edit/wizard`)}>
						<Trans>ถัดไป: ตั้งค่าวีดีโอ</Trans>
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
}
