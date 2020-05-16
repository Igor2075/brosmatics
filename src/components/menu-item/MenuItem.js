import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, id }) => {
	const styles = {
		backgroundImage: `url(${imageUrl})`,
	};
	return (
		<div className={`${size} menu-item`}>
			<div className="background-image" style={styles} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
