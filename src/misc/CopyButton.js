import React, { useContext } from 'react';

import { useLingui } from '@lingui/react';
import { t } from '@lingui/macro';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';

import CopyToClipboard from '../utils/clipboard';
import NotifyContext from '../contexts/Notify';

export default function CopyButton(props) {
	const notify = useContext(NotifyContext);
	const { i18n } = useLingui();
	const { children, value, ...other } = props;

	const handleCopy = async () => {
		const success = await CopyToClipboard(value);

		if (success === true) {
			notify.Dispatch('success', 'clipboard', i18n._(t`คัดลอกข้อมูลไปยังคลิปบอร์ดแล้ว`));
		} else {
			notify.Dispatch('error', 'clipboard', i18n._(t`เกิดข้อผิดพลาดขณะคัดลอกข้อมูลไปยังคลิปบอร์ด`));
		}
	};

	return (
		<Button {...other} endIcon={<FileCopyIcon />} onClick={handleCopy}>
			{children}
		</Button>
	);
}

CopyButton.defaultProps = {
	value: '',
};
