import React, { useContext } from "react";

import styles from "./ToastPlayground.module.css";
import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const { createToast } = useContext(ToastContext);
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

	const handleCreateToast = (e) => {
		e.preventDefault();
		createToast(message, variant);
		setMessage("");
		setVariant(VARIANT_OPTIONS[0]);
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
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
