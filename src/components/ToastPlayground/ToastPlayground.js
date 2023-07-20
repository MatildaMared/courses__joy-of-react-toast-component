import React from "react";

import styles from "./ToastPlayground.module.css";
import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [toasts, setToasts] = React.useState([]);

	const handleDisplayToast = (e) => {
		e.preventDefault();
		setToasts((prevToasts) => [
			...prevToasts,
			{
				// eslint-disable-next-line no-restricted-globals
				id: self.crypto.randomUUID(),
				message,
				variant,
			},
		]);
		setMessage("");
		setVariant(VARIANT_OPTIONS[0]);
	};

	const handleDismissToast = (id) => {
		setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toasts={toasts} onDismiss={handleDismissToast} />

			<form className={styles.controlsWrapper} onSubmit={handleDisplayToast}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((toastVariant) => (
							<label htmlFor={`variant-${toastVariant}`} key={toastVariant}>
								<input
									id={`variant-${toastVariant}`}
									type="radio"
									name="variant"
									value={toastVariant}
									checked={toastVariant === variant}
									onChange={(e) => setVariant(e.target.value)}
								/>
								{toastVariant}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="submit">Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
