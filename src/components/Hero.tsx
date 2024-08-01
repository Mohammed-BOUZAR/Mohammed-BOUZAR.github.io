import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";
import { heroWords } from "@/data";

function Hero() {

	return (
		<div className="pb-20 h-screen w-full">
			<div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] absolute overflow-hidden">
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			<div className="h-screen flex flex-col justify-center items-center relative z-10 px-20">
				<div className="flex flex-col items-center justify-center gap-4">
					<p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						Dynamic Web Magic
					</p>

					<TypewriterEffect words={heroWords} className="text-center sm:text-2 xl md:text-6xl lg:text-6xl md:px-16" />

					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m Mohammed, a Full-Stack Developer, Specializing in Web & Mobile Technologies and Passionate About Building Innovative Digital Solutions
					</p>
				</div>
				<Link href="#about">
					<MagicButton
						title="Show my work"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</Link>
			</div>
		</div>
	);
}

export default Hero;