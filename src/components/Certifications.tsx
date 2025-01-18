import { certifications } from "@/data";
import TitleSection from "./ui/title-section";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { InfiniteMoving3dCards } from "./ui/infinite-moving-3d-cards";
import Image from "next/image";

function Certifications() {
	if (certifications.length === 0) return null;
	// if (certifications.length <= 3) certifications.forEach((el, idx) => certifications.push(certifications[idx]));
	if (certifications.length <= 3) {
		for (let i = 0; i < 3; i++) {
			certifications.forEach((el, idx) => certifications.push(certifications[idx]));
		}
	} else {
		certifications.forEach((el, idx) => certifications.push(certifications[idx]));
	}
	return (
		<div className="w-full">
			<TitleSection id="certifications" title="Certifications" />
			<InfiniteMoving3dCards
				direction="right"
			>
				{certifications.map((cert, idx) => (
					<CardContainer className="inter-var" key={idx}>
						<CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-black dark:text-white line-clamp-1"
							>
								{cert.title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
							>
								{cert.description}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">

								<a
									href={cert.url}
									target="_blank"
								>
									<Image
										src={cert.image}
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

export default Certifications;