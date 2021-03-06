import React, { useState, useCallback } from "react";
import "./index.css";
import classes from "./SimpleAlert.module.css";

export const AlertType = {
	Primary: "border-blue-500",
	Danger: "border-red-600",
	Info: "border-yellow-500",
	Success: "border-green-500",
};

const SimpleAlert = (WrappedComponent) => {
	const ComponentWithAlert = (props) => {
		const [show, setShow] = useState(false);
		const [alertHeading, setAlertHeading] = useState("");
		const [alertMessage, setAlertMessage] = useState("");
		const [alertBoxBorderClass, setalertBoxBorderClass] = useState(
			AlertType.Primary
		);

		const showAlertBox = useCallback(() => {
			setShow(true);
		}, []);

		const hideAlertBox = useCallback(() => {
			setShow(false);
		}, []);

		const showAlert = useCallback(
			(message, alertType, heading = "") => {
				if (message) {
					setAlertMessage(message);
					setalertBoxBorderClass(alertType);
					setAlertHeading(heading);
					showAlertBox();
				}
			},
			[showAlertBox, setAlertMessage, setalertBoxBorderClass, setAlertHeading]
		);

		const showTemporaryAlert = useCallback(
			(message, alertType, timeout = 5000, heading = "") => {
				if (message) {
					setAlertMessage(message);
					setalertBoxBorderClass(alertType);
					setAlertHeading(heading);
					showAlertBox();
					setTimeout(() => {
						hideAlertBox();
					}, timeout);
				}
			},
			[
				showAlertBox,
				setAlertMessage,
				setalertBoxBorderClass,
				setAlertHeading,
				hideAlertBox,
			]
		);

		return (
			<React.Fragment>
				<WrappedComponent
					{...props}
					showAlert={showAlert}
					showTemporaryAlert={showTemporaryAlert}
				/>
				<article
					className={`fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 p-2 bg-white shadow-2xl border-t-8 ${alertBoxBorderClass} ${
						classes.alertBox
					} ${show ? classes.alertBoxShow : ""}`}
				>
					<section id="content" className="flex flex-col items-center">
						<section id="message" className="h-16 overflow-y-auto">
							{alertHeading && (
								<h1 className="font-bold text-lg">{alertHeading}</h1>
							)}
							<p>{alertMessage}</p>
						</section>
						<section id="close">
							<button
								className="bg-red-200 hover:bg-red-300 text-red-700 font-bold p-2 w-20"
								onClick={hideAlertBox}
							>
								Close
							</button>
						</section>
					</section>
				</article>
			</React.Fragment>
		);
	};
	return ComponentWithAlert;
};

export default SimpleAlert;
