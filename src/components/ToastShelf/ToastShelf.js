import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onDismiss }) {
	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				<div className={styles.toastWrapper} key={toast.id}>
					<Toast
						className={styles.toastWrapper}
						message={toast.message}
						variant={toast.variant}
						onClose={() => onDismiss(toast.id)}
					/>
				</div>
			))}
		</ol>
	);
}

export default ToastShelf;
