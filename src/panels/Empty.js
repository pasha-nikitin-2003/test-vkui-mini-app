import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={() => props.go('persik')} data-to="home"/>}
		>
			Persik
		</PanelHeader>
	</Panel>
);

export default Persik;