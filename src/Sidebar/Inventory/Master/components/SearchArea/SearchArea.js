import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SearchArea.css';

const SearchArea = () => {
	return (
		<div className="mt-5">
			<div className="search-container">
				<Form.Control
					className="search-inline round-input"
					type="text"
					placeholder="Search"
					style={{boxShadow: 'none'}}
				/>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Search
				</Button>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					BulkUpdate</Button>
					<Button  style={{ boxShadow: 'none',borderRadius:20,width:'9rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Import/Export</Button>
			</div>
		</div>
	);
};

export default SearchArea;
