import React, { useState } from "react";

const Navbar = ({ toggleMode, darkMode }) => {
	return (
		<nav className="navbar">
			<h1>Crypto Tracker</h1>
			<div
				className="dark-mode__toggle"
				onClick={toggleMode}
				style={{ cursor: "pointer" }}
			>
				<div className={darkMode ? "toggle toggled" : "toggle"} />
			</div>
		</nav>
	);
};

export default Navbar;
