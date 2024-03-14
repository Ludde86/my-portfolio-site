import React from 'react';
import './project.css';

const Project = ({
	image,
	ort,
	byggherre,
	arkitekt,
	generalentreprenör,
	omfattning,
	projekttid,
	illustration,
	entreprenadform
}) => {
	return (
		<div className="project">
			<div className="project__info">
				<h1>{byggherre}</h1>
				<h3>{ort}</h3>

				<img src={image} alt="pro1" />
				<div className="project__info-button">Läs mer</div>

				{/*
				<div className="project__info-details">
                <div>
						<p className="project__info-details_title">Ort:</p>
						<p className="project__info-details_text">{ort}</p>
					</div>

					<div>
						<p className="project__info-details_title">Byggherre:</p>
						<p className="project__info-details_text">{byggherre}</p>
					</div>

					<div>
						<p className="project__info-details_title">Arkitekt:</p>
						<p className="project__info-details_text">{arkitekt}</p>
					</div>

					<div>
						<p className="project__info-details_title">Generalentreprenör:</p>
						<p className="project__info-details_text">{generalentreprenör}</p>
					</div>

					<div>
						<p className="project__info-details_title">Omfattning:</p>
						<p className="project__info-details_text">{omfattning}</p>
					</div>

					<div>
						<p className="project__info-details_title">Projekttid:</p>
						<p className="project__info-details_text">{projekttid}</p>
					</div>

					<div>
						<p className="project__info-details_title">Illustration:</p>
						<p className="project__info-details_text">{illustration}</p>
					</div>

					<div>
                    <p className="project__info-details_title">Läs mer:</p>
                    <p className="project__info-details_text">Här</p>
					</div>
                    </div>
                */}
			</div>

			{/*
			<div className="project__description">
            <p>Kv Fjalar är beläget nära järnvägsstationen i Uppsala city.</p>
				<p>
					Projektet benämns Magasin X och är en nybyggnad av kontorshus med garageplan under mark och 7
					våningar ovan mark. Byggnaden har höga våningshöjder på drygt fyra meter och stora glasytor i
					fasaden.
				</p>
				<p>
					Kontorsplanen byggs med öppna ytor med limmade undertak mot fasad och nedpendlade undertak i
					mittkärnan. En mindre ljusgård med trappa och väggar i trä byggs i husets mittkärna. I entréplan
					planeras fastighetsgemensamma konferensytor och café samt den översta våningen får en gemensam
					takterrass. Stor vikt har lagts vid att kunna dela in varje kontorsplan i flera mindre hyresgäster.
				</p>
				<p>
					Stommen ovan mark i Magasin X byggs helt i trä med pelare och balkar av limträ och bjälklag med
					korslimmat trä. Stor vikt läggs vid att ha synliga pelare och balkar men även många väggytor inne i
					byggnaden kommer vara av trä.
				</p>
				<p>Byggnaden miljöcertifieras enligt LEED med högsta klassningen, Platinum version 4.</p>
				<p>
					Projektet kommer utöver trästommen ha många innovativa och effektiva lösningar som egenproducerad
					värme och kyla med geoenergilager utan inkoppling av fjärrvärme eller fjärrkyla, solceller på tak
					och fasad och batteriförsörjda sprinklerpumpar.
				</p>
				<p>
					Roller från Hedström & Taube i projektet är: Projektledare, Projekteringsledare och
					Hyresgästkoordinator
				</p>
			</div>
        */}
		</div>
	);
};

export default Project;
