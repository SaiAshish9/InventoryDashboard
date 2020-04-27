import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Settings.css';

const Settings = () => {
	return (
		<div className=" mt-5">
			<Form className="mt-5">
				<Form.Group>
					<h4>No of days of stock holding</h4>
					<div
						style={{
							margin : 'auto',
							width  : '50%'
						}}
					>
						<Form.Control style={{boxShadow: 'none'}} className="round-input" type="text" />
					</div>
				</Form.Group>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Search
				</Button>			</Form>
		</div>
	);
};

export default Settings;
