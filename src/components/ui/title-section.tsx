function TitleSection({ title, id, className }: { title: string; id?: string; className?: string }) {
	return (
		<div id={id}>
			<h1 className={"text-center md:text-3xl lg:text-4xl text-white font-bold " + className}>{title}</h1>
		</div>
	);
}

export default TitleSection;