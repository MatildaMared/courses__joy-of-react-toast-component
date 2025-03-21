import React from "react";
import useEscapeKey from "./../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	useEscapeKey(() => {
		setToasts([]);
	});

	const createToast = React.useCallback(
		(message, variant) => {
			setToasts((prevToasts) => [
				...prevToasts,
				{
					// eslint-disable-next-line no-restricted-globals
					id: self.crypto.randomUUID(),
					message,
					variant,
				},
			]);
		},
		[setToasts]
	);

	const dismissToast = React.useCallback(
		(id) => {
			setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
		},
		[setToasts]
	);

	return (
		<ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
