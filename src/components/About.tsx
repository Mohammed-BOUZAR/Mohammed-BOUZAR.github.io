"use client";
import { useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { LampContainer } from "./ui/lamp";
import Paragraph from "./ui/paragraph";
import TitleSection from "./ui/title-section";
import Image from "next/image";
import React from "react";


function About() {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
	const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
	const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
	const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
	const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

	return (
		<div id="about" className="w-full">

			<div className="w-full pt-20 dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<TitleSection title="About Me" className="relative z-50" />
				<CardContainer className="w-full flex flex-col gap-4 px-16 py-1">
					<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex items-center gap-3">
						<CardItem
							as="p"
							translateZ="100"
							className="lg:text-lg lg:font-normal font-light text-sm text-[#BEC1DD]"
						>
							Hello! I&apos;m Mohammed Bouzar, a passionate and experienced Full-Stack Developer with a strong focus on web and mobile application development. With expertise in Flutter, Vue.js, and Node.js, I have successfully developed and maintained various applications, including a chat app and a tic-tac-toe game, among others. I am particularly adept at troubleshooting and resolving bugs, ensuring seamless user experiences.
						</CardItem>
					</CardBody>
					<div className="flex gap-4 w-full sm:flex-col">
						<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex items-center gap-3">
							<CardItem
								as="p"
								translateZ="100"
								className="lg:text-lg lg:font-normal font-light text-sm text-[#BEC1DD]"
							>
								I continuously seek to improve my skills and stay updated with the latest industry trends, including studying artificial intelligence to enhance my development processes. My commitment to excellence and detail-oriented approach allows me to deliver high-quality, efficient, and user-friendly solutions.
							</CardItem>
						</CardBody>
						<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex items-center gap-3">
							<CardItem
								as="p"
								translateZ="100"
								className="lg:text-lg lg:font-normal font-light text-sm text-[#BEC1DD]"
							>
								Whether you need a new application built from scratch or require maintenance and updates for an existing one, I am here to help you achieve your goals. Let&apos;s collaborate and bring your vision to life!
							</CardItem>
						</CardBody>
					</div>
				</CardContainer>
			</div>
			{/* <div
				className="h-[400vh] bg-black w-full rounded-md relative pt-40 overflow-clip"
				ref={ref}
			>
				<GoogleGeminiEffect
					pathLengths={[
						pathLengthFirst,
						pathLengthSecond,
						pathLengthThird,
						pathLengthFourth,
						pathLengthFifth,
					]}
					className="bg-[url('/bg-pattern.svg')] bg-fixed bg-cover"
				>
					<TitleSection title="About Me" />
					<CardContainer className="w-full flex flex-col gap-4 px-16 py-1">
						<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex items-center gap-3 px-16">
							<CardItem
								as="p"
								translateZ="100"
								rotateZ={10}
								rotateX={-10}
								className="text-neutral-500 text-sm dark:text-neutral-300 w-full"
							>
								Hello! I&apos;m Mohammed Bouzar, a passionate and experienced Full-Stack Developer with a strong focus on web and mobile application development. With expertise in Flutter, Vue.js, and Node.js, I have successfully developed and maintained various applications, including a chat app and a tic-tac-toe game, among others. I am particularly adept at troubleshooting and resolving bugs, ensuring seamless user experiences.
							</CardItem>
						</CardBody>
						<div className="flex gap-4 w-full">
							<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-full h-auto rounded-xl p-6 border flex items-center gap-3">
								<CardItem
									as="p"
									translateZ="100"
									rotateX={10}
									rotateZ={-10}
									className="text-neutral-500 text-sm  dark:text-neutral-300"
								>
									I continuously seek to improve my skills and stay updated with the latest industry trends, including studying artificial intelligence to enhance my development processes. My commitment to excellence and detail-oriented approach allows me to deliver high-quality, efficient, and user-friendly solutions.
								</CardItem>
							</CardBody>
							<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-full h-auto rounded-xl p-6 border flex items-center gap-3">
								<CardItem
									as="p"
									translateZ="100"
									rotateZ={10}
									rotateX={-10}
									className="text-neutral-500 text-sm dark:text-neutral-300"
								>
									Whether you need a new application built from scratch or require maintenance and updates for an existing one, I am here to help you achieve your goals. Let&apos;s collaborate and bring your vision to life!
								</CardItem>
							</CardBody>
						</div>
					</CardContainer>
				</GoogleGeminiEffect>
			</div> */}
		</div >
	);
}

export default About;