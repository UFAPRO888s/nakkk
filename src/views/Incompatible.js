import React from 'react';

import { Trans } from '@lingui/macro';

import Paper from '../misc/Paper';
import PaperHeader from '../misc/PaperHeader';
import PaperContent from '../misc/PaperContent';

export default function Incompatible(props) {
	let text = <Trans>UI เวอร์ชันนี้เข้ากันได้</Trans>;

	if (props.type === 'core') {
		text = (
			<Trans>
				UI เวอร์ชันนี้ไม่รองรับคอร์ที่เชื่อมต่อ ({props.have}) UI ต้องใช้ {props.want} โปรดใช้รุ่นที่เข้ากันได้ของUI
			</Trans>
		);
	} else if (props.type === 'ffmpeg') {
		text = (
			<Trans>
				UI เวอร์ชันนี้ไม่รองรับไบนารี FFmpeg ที่มีอยู่ ({props.have}) UI ต้องใช้ {props.want} โปรดใช้ FFmpeg ที่รองรับไบนารี่
			</Trans>
		);
	}

	return (
		<Paper xs={8} sm={6} md={6} className="PaperM">
			<PaperHeader title={<Trans>Error</Trans>} />
			<PaperContent>{text}</PaperContent>
		</Paper>
	);
}

Incompatible.defaultProps = {
	type: '',
	have: '',
	want: '',
};
