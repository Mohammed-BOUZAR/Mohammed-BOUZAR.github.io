import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";
import TitleSection from "./ui/title-section";
import { projects } from "@/data";
import Img from "next/image";

function Projects() {
	return (
		<div className="pt-20">
			<TitleSection id="projects" title="Projects" />
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((item, idx) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
						key={idx}
					>
						<PinContainer
							title={item.title}
							href={item.link}
							target="_blank"
						>
							<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
								<Img width={1000} height={1000}
									src={item.image}
									alt="cover"
									className="w-full h-full"
								/>
							</div>

							<h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 dark:text-white text-black">
								{item.title}
							</h1>

							<p
								className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 dark:text-[#BEC1DD] text-[#646464]"
								style={{
									margin: "1vh 0",
								}}
							>
								{item.description}
							</p>

							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{item.iconLists.map((icon, index) => (
										<div
											key={index}
											className="border border-black dark:border-white/[.2] bg-[#eee] rounded-full dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<Img src={icon} alt="icon5" className="p-2" width={100} height={100} />
										</div>
									))}
								</div>

								{/* <div className="flex justify-center items-center">
									<p className="flex text-sm text-purple dark:text-white">
										Check Live Site
									</p>
									<FaLocationArrow className="mx-3 dark:text-[#eee]" width={100} height={100} />
								</div> */}
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;