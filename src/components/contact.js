import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import myAvatar from '../img/myAvatar2.png';

const Contact = () => {
	return (
		<div className="contact-body">
			<Grid className="contact-grid">
				<Cell col={6}>
					<h2>Ludvig Björn</h2>
					<img src={myAvatar} alt="myAvatar2" style={{ height: '250px', borderRadius: '5%' }} />
					<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Hej hej hej</p>
				</Cell>
				<Cell col={6}>
					<h2>Contact Me</h2>
					<hr />
					<div className="contact-list">
						<List>
							<ListItem>
								<ListItemContent icon="person">Bryan Cranston</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent icon="person">Aaron Paul</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent icon="person">Bob Odenkirk</ListItemContent>
							</ListItem>
						</List>
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default Contact;
