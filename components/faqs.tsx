import Image from 'next/image';
import FAQQuestion from './faq-question';
import { Button } from './ui/button';
import Heading from './ui/heading';

const FAQs = () => {
	return (
		<div className=" flex flex-col-reverse md:flex-row justify-between  gap-5">
			<div className=" w-full max-w-lg">
				<div className=" py-10 hidden md:flex">
					<Heading
						title="Frequently asked questions"
						description="Here are some of our most asked questions."
					/>
				</div>
				<div className=" flex  items-center bg-slate-50 p-5 rounded-3xl">
					<div className="w-[50%]">
						<p className=" pb-5 font-semibold">
							Still need help? <br /> We are here for you.
						</p>
						<Button className=" rounded-xl p-5 py-4">
							Chat with us
						</Button>
					</div>
					<div className=" relative  aspect-[2/1] flex items-center  justify-center w-[50%]">
						<Image
							src="/faq.png"
							alt="faq"
							width="200"
							height="200"
						/>
					</div>
				</div>
			</div>
			<div className=" w-full max-w-3xl">
				<div className=" py-5 flex md:hidden">
					<Heading
						title="Frequently asked questions"
						description="Here are some of our most asked questions."
					/>
				</div>
				<FAQQuestion />
			</div>
		</div>
	);
};

export default FAQs;
