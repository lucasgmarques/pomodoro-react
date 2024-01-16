import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import "./App.css";

const App = () => {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval;

		if (isActive) {
			interval = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(interval);
						setIsActive(false);
						// You can add a notification or sound here when the timer finishes
					} else {
						setMinutes((prev) => prev - 1);
						setSeconds(59);
					}
				} else {
					setSeconds((prev) => prev - 1);
				}
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [isActive, minutes, seconds]);

	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	const resetTimer = () => {
		setIsActive(false);
		setMinutes(25);
		setSeconds(0);
	};

	return (
		<div className="container">
			<div className="timer">
				{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
			</div>
			<div className="controls">
				<button onClick={toggleTimer}>
					{isActive ? <FaPause /> : <FaPlay />}
				</button>
				<button onClick={resetTimer}>
					<FaRedo />
				</button>
			</div>
		</div>
	);
};

export default App;
