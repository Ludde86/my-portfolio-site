import React, { useState } from 'react';
import './projects.css';
import Challenge1 from './challengesCSS/challenge1/Challenge1';
import Webdesign1 from "./webdesigns/webdesign1/webdesign1";
import Naprapatrehab from './webdesigns/naprapatrehab/Naprapatrehab';
import Htproject from './webdesigns/htproject/Htproject';
import NaprapatRehab2 from './webdesigns/naprapatrehab2/NaprapatRehab2';
import Napra3 from './webdesigns/napra3/Napra3';
import Haningetk1 from './webdesigns/haningetk1/Haningetk1';

const Projects = () => {
	const [activeTab, setActiveTab] = useState(0);

	const links = ['Haningetk1', 'Napra3', 'Napra2', 'Napra1', 'HTProject', 'React', 'CSS']

	const toggleCategories = () => {
		switch (activeTab) {
			case 0:
				return <Haningetk1 />
			case 1:
				return <Napra3 />
			case 2:
				return <NaprapatRehab2 />
			case 3:
				return <Naprapatrehab />
			case 4:
				return <Htproject />
			case 5:
				return <Webdesign1 />
			case 6:
				return <Challenge1 />
			default:
				return 'No Tab';
		}
	};

	return (
		<div >
			<header id='nav-projects'>
				<nav >
					{/* css in navbar.css */}
					<div className='links-container'>
						{links.map((item, index) =>
							<p key={index} onClick={() => setActiveTab(index)} className='link'>{item}</p>
						)}
					</div>
				</nav>
				<div className='navbar_button-container2_design'>
					<div className='navbar_button-container2 menu-button-2'>
						<input type="checkbox" />
						<span className='first-line'></span>
						<span className='second-line'></span>
						<span className='third-line'></span>
					</div>
					<div>
						<span id="menu-button-text"><i className="fa fa-angle-double-left fa-lg menu-button-icon" aria-hidden="true" />DESIGN</span>
					</div>
				</div>
			</header>
			<div className="content">{toggleCategories()}</div>
		</div>
	);
};

export default Projects;
