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
				/>
				<Button className="round" type="submit">
					Search
				</Button>
				<Button className="round">BulkUpdate</Button>
				<Button className="round">Import/Export</Button>
			</div>
		</div>
	);
};

export default SearchArea;
