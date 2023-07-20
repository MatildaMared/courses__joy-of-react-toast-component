import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", onClick, ...delegated }) {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${className}`}
			{...delegated}
		/>
	);
}

export default Button;
