"use client";
import { Timeline } from "flowbite-react";
import TitleSection from "./ui/title-section";
import { experiences } from "@/data";
import { HiCalendar } from "react-icons/hi";

function Experiences() {

	const timelineTheme = {
		"root": {
			"direction": {
				"horizontal": "sm:flex",
				"vertical": "relative border-l border-gray-300 dark:border-gray-200"
			}
		},
		"item": {
			"root": {
				"horizontal": "relative mb-6 sm:mb-0",
				"vertical": "mb-10 ml-6"
			},
			"content": {
				"root": {
					"base": "",
					"horizontal": "mt-3 sm:pr-8",
					"vertical": "dark:bg-slate-950 bg-neutral-100 rounded-xl py-2 px-4"
				},
				"body": {
					"base": "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
				},
				"time": {
					"base": "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
				},
				"title": {
					"base": "text-lg font-semibold text-gray-900 dark:text-white"
				}
			},
			"point": {
				"horizontal": "flex items-center",
				"line": "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
				"marker": {
					"base": {
						"horizontal": "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
						"vertical": "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
					},
					"icon": {
						"base": "h-3 w-3 text-cyan-600 dark:text-cyan-300",
						"wrapper": "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
					}
				},
				"vertical": ""
			}
		}
	};
	return (
		<div id="experiences" className="w-full flex flex-col items-center justify-center pt-20">
			<TitleSection id="experience" title="Experience" />
			<div className="h-auto w-[80%] py-20">
				<Timeline theme={timelineTheme}>
					{experiences.map((exp, idx) => (						
						<Timeline.Item key={idx}>
							<Timeline.Point icon={HiCalendar} />
							<Timeline.Content>
								<Timeline.Title>{exp.cardTitle}</Timeline.Title>
								<Timeline.Time>{exp.date}</Timeline.Time>
								<Timeline.Body>{exp.cardSubtitle}</Timeline.Body>
								<Timeline.Body>{exp.cardDetailedText}</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
					))}  
					</Timeline>
			</div>
		</div>
	);
}

export default Experiences;