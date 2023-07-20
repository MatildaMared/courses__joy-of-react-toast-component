import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [showToast, setShowToast] = React.useState(false);

	const handleDisplayToast = () => {
		console.log(
			"Displaying toast with message:",
			message,
			"and variant:",
			variant
		);
		setShowToast(true);
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{showToast && (
				<Toast
					message={message}
					variant={variant}
					onClose={() => setShowToast(false)}
				/>
			)}

			<div className={styles.controlsWrapper}>
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
						<Button onClick={handleDisplayToast}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
