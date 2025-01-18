import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { InfiniteMoving3dCards } from "./ui/infinite-moving-3d-cards";
import TitleSection from "./ui/title-section";
import Image from "next/image";
import { achievements } from "@/data";

function Achievements() {
	if (achievements.length === 0) return null;
	if (achievements.length <= 3) {
		for (let i = 0; i < 3; i++) {
			achievements.forEach((el, idx) => achievements.push(achievements[idx]));
		}
	} else {
		achievements.forEach((el, idx) => achievements.push(achievements[idx]));
	}
	return (
		<div className="w-full">
			<TitleSection id="achievements" title="Achievements" />
			<InfiniteMoving3dCards
				direction="left"
			>
				{achievements.map((ach, idx) => (
					<CardContainer className="inter-var" key={idx}>
						<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
							>
								{ach.title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
							>
								{ach.description}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">

								<a
									href={ach.url}
									target="_blank"
								>
									<Image
										src={ach.image}
										width="10000"
										height="10000"
										className="h-72 w-full bg-cover rounded-xl group-hover/card:shadow-xl"
										alt="thumbnail"
									/>
								</a>
							</CardItem>
						</CardBody>
					</CardContainer>
				))}
			</InfiniteMoving3dCards>
		</div>
	);
}

export default Achievements;