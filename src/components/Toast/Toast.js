import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ message, variant, onClose }) {
	const Icon = ICONS_BY_VARIANT[variant];

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden> error - </VisuallyHidden>
				{message}
			</p>
			<button
				className={styles.closeButton}
				aria-label="Dismiss message"
				aria-live="off"
			>
				<X size={24} onClick={onClose} />
			</button>
		</div>
	);
}

export default Toast;
