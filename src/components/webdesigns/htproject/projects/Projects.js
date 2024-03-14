import React from 'react';
import Project from '../project/Project';
import './projects.css';
import pro1 from '../assets/magasinX.png';
import pro2 from '../assets/unnamed-1.jpg';
import pro3 from '../assets/0.jpeg';
import pro4 from '../assets/unnamed-2.jpg';

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<Project
				image={pro1}
				ort="Uppsala City"
				byggherre="Vasakronan Magasin X AB"
				arkitekt="White, Uppsala"
				generalentreprenör="NCC Sverige AB (samverkansentreprenad)"
				omfattning="Ca 16.500 kvm BTA"
				projekttid="Byggstart augusti 2019 och färdigställs under Q1 2022"
				illustration="Vasakronan/White"
			/>
			<Project
				image={pro2}
				ort="Signalbron/Kolonnvägen/Gustav III Boulevard i Solna"
				byggherre="Fabege (Simhall, Solna Stad)"
				omfattning="Nybyggnad av ca 32 500 m2 kontor samt ca 5 500 m2 Simhall, totalt 38 000 m2 BTA."
				projekttid="2017-2023"
				illustration="Fabege / Strategisk Arkitektur"
			/>
			<Project
				image={pro3}
				ort="Solna"
				byggherre="Fabege"
				entreprenadform="Totalentreprenad"
				omfattning="Nyproduktion ca 20.000 kvm"
				projekttid="2018-2021"
				illustration="White"
			/>
			<Project
				image={pro4}
				ort="Solna"
				byggherre="Fabege"
				omfattning="Ca 50 000m² kontor, 1000 st lägenheter,
                ca 60 000 m² underbyggnad."
				projekttid="2018-2026"
				illustration="BAU"
			/>
		</div>
	);
};

export default Projects;
