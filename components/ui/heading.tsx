interface HeadingProps {
	title: string;
	description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
	return (
		<div className=" flex flex-col gap-4">
			<h1 className=" text-xl md:text-2xl font-semibold">{title}</h1>
			<p className=" text-gray-500 text-sm">{description}</p>
		</div>
	);
};

export default Heading;
