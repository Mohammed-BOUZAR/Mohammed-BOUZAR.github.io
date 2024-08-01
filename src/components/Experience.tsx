"use client";
import TitleSection from "./ui/title-section";
import { experiences } from "@/data";
import { Chrono } from "react-chrono";

function Experience() {
	return (
		<div>
			<TitleSection id="experience" title="Experience" />
			<div className="h-auto w-full py-20">
				<Chrono
					className="w-full"
					disableToolbar="false"
					mode="VERTICAL"
					items={experiences}
					itemWidth="300"
					scrollable="true"
					theme={{
						primary: 'white',
						secondary: '#BEC1DD',
						cardBgColor: 'black',
						titleColor: 'white',
						titleColorActive: 'white',
						cardTitleColor: 'white',
						cardSubtitleColor: 'white',
						cardDetailsColor: '#BEC1DD',
					}}
				/>
			</div>
		</div>
	);
}

export default Experience;