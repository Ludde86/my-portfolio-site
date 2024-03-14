import React, { useState } from 'react';
import './nav.css';
import logo from '../assets/Hedström & Taube Stämpel_RGB[1382].png';
import { MdOutlineEmojiNature, MdOutlineNaturePeople } from 'react-icons/md';
import { FaSignature } from 'react-icons/fa';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Menu from '../menu/Menu';

const Nav = () => {
	const [openSubNav, setOpenSubNav] = useState(false);
	const [openSubNav2, setOpenSubNav2] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleSetOpenSubNav = (value) => {
		setOpenSubNav(value);
		setOpenSubNav2(false);
	};

	const handleSetOpenSubNav2 = (value) => {
		setOpenSubNav2(value);
	};

	return (
		<div className="nav">
			<div className="logo">
				<a href="#start" className="logo__text">
					Hedström & Taube
				</a>

				<img src={logo} alt="logo" width={26} />
			</div>
			<div className="link-container">
				<div className="links">
					<span className="links__text" onClick={() => handleSetOpenSubNav(false)}>
						Projekt
					</span>
					<span className="links__text" onClick={() => handleSetOpenSubNav(false)}>
						Projektledning
					</span>
					<span className="links__text" onClick={() => handleSetOpenSubNav(false)}>
						Projekteringsledning
					</span>
					<span className="links__text" onClick={() => handleSetOpenSubNav(false)}>
						Installationsledning
					</span>
					<span className="links__text" onClick={() => handleSetOpenSubNav(false)}>
						Byggekonomi
					</span>
					<span className="links__text" onClick={() => handleSetOpenSubNav(!openSubNav)}>
						Miljö
					</span>
					<span className="links__text" onClick={() => handleSetOpenSubNav(false)}>
						Fastighetskonsult
					</span>

					<span className="links__text" href="#footer" onClick={() => handleSetOpenSubNav(false)}>
						Kontakt
					</span>
				</div>
				{openSubNav ? (
					<div className="sub-nav">
						<div className="sub-nav__item">
							<span className="sub-nav__text" onClick={() => handleSetOpenSubNav2(!openSubNav2)}>
								Miljöcertifiering
							</span>
							<FaSignature color="#ccc" size={25} />
						</div>
						<div className="sub-nav__item">
							<span className="sub-nav__text" onClick={() => handleSetOpenSubNav2(false)}>
								Koldioxidpåverkan
							</span>

							<MdOutlineEmojiNature color="#ccc" size={25} />
						</div>
						<div className="sub-nav__item">
							<span className="sub-nav__text" onClick={() => handleSetOpenSubNav2(false)}>
								Utredningar
							</span>
							<MdOutlineNaturePeople color="#ccc" size={25} />
						</div>
					</div>
				) : null}

				{openSubNav2 ? (
					<div className="sub-nav2">
						<div className="sub-nav__item">
							<span className="sub-nav__text">Miljöcertifiering 1</span>
							<FaSignature color="#ccc" size={25} />
						</div>
						<div className="sub-nav__item">
							<span className="sub-nav__text">Miljöcertifiering 2</span>

							<FaSignature color="#ccc" size={25} />
						</div>
					</div>
				) : null}
			</div>

			<div className="nav__menu">
				{toggleMenu ? (
					<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				)}

				{toggleMenu && (
					<div className="scale-up-center">
						<div onClick={() => setToggleMenu(false)}>
							<Menu />
							{/*
						<div className="qlosr__navbar-menu_container-links-sign">
						<p>Logga in</p>
						<button type="button">Skapa konto</button>
						</div>
					*/}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Nav;
