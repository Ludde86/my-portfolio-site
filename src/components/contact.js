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
								<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
									<i className="fa fa-phone-square" aria-hidden="true" />
									0704608611
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
									<i className="fa fa-envelope-square" aria-hidden="true" />
									ludvig@mail.com
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
									linkedIn
								</ListItemContent>
							</ListItem>
						</List>
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default Contact;
