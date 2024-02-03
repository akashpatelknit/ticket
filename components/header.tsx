'use client';
import { ArrowLeft, FileQuestion, HelpCircle, Lock } from 'lucide-react';
import Container from './ui/container';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<div className=" border-b">
			<Container>
				<div className="flex px-5 md:px-4 flex-row justify-between items-center h-20 ">
					<div className="hidden md:flex">
						<Image
							src="/t.png"
							alt="logo"
							width="120"
							height="50"
						/>
					</div>
					<ArrowLeft className=" flex md:hidden" />
					<Link
						href="/"
						className=" flex  items-center gap-2 text-gray-500 font-semibold"
					>
						<Lock />
						<p>Checkout</p>
					</Link>

					<div className=" flex  items-center gap-2">
						<HelpCircle />
						<p className="hidden md:flex">Help</p>
					</div>
				</div>
			</Container>
			<div className=" h-10 bg-black flex items-center justify-center">
				<p className=" text-white">Holding your tickets for 30:00</p>
			</div>
		</div>
	);
};

export default Header;
