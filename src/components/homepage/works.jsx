import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./microsoft.png"
								alt="microsoft"
								className="work-image"
							/>
							<div className="work-title">Microsoft</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./adobe.png"
								alt="adobe"
								className="work-image"
							/>
							<div className="work-title">Adobe</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
