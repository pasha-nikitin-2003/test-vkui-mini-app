import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack, Button } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik = ({id, go}) => (
	<Panel id={id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={() => go('home')} data-to="home"/>}
		>
			Persik
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		<div style={{height: '1000px', background: 'red'}}></div>
		<Button onClick={() => go('empty')}>На след панель</Button>
	</Panel>
);

export default Persik;
