import Image from 'next/image';
import Container from './ui/container';
import { Separator } from './ui/separator';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="  bg-black mt-10 ">
			<Container>
				<div className="flex items-center h-[100%]">
					<h1 className=" text-white text-6xl font-bold pt-20 pb-10">
						ticket
					</h1>
				</div>
			</Container>
			<Separator />
			<Container>
				<div className="flex items-center h-[100%] text-gray-500  font-semibold gap-5 py-3 flex-wrap">
					<span className="hidden md:flex">Made with ❤️</span>
					<Link href="/about">• Privacy policy</Link>
					<Link href="/about">• Terms and usage</Link>
					<Link href="/about">• Cancellation policy</Link>
					<Link href="/about">• Sitemap</Link>
				</div>
				<span className="flex md:hidden text-gray-500 pb-2 ml-2">
					Made with ❤️
				</span>
			</Container>
		</div>
	);
};

export default Footer;
