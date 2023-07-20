import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
	const { toasts, dismissToast } = React.useContext(ToastContext);

	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				<div className={styles.toastWrapper} key={toast.id}>
					<Toast
						className={styles.toastWrapper}
						message={toast.message}
						variant={toast.variant}
						onClose={() => dismissToast(toast.id)}
					/>
				</div>
			))}
		</ol>
	);
}

export default ToastShelf;
