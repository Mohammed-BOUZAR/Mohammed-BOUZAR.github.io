function Paragraph({ text, className }: { text: string; className?: string }) {
	return (
		<div>
			<h1 className={"text-white my-2 " + className}>{text}</h1>
		</div>
	);
}

export default Paragraph;