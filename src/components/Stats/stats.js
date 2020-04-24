import React from 'react';
import ReactDOM from 'react-dom';
import './stats.css';
import Rectangle from '../Rectangle/rectangle';
import { Row, Col } from 'react-bootstrap';

const Stats = () => {
	return (
		<Row className="stat-row">
			<Rectangle />
			<Rectangle />
			<Rectangle />
			<Rectangle />
		</Row>
	);
};

export default Stats;
