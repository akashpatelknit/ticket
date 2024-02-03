interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className=" mx-auto max-w-screen-2xl px-3 md:px-16">{children}</div>;
};

export default Container;
