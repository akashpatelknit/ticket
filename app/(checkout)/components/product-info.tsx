'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { Separator } from '@/components/ui/separator';
import {
	AlertCircle,
	Calendar,
	Lock,
	PiggyBank,
	Star,
	StarHalf,
	TicketCheck,
	Trophy,
	Users,
	Watch,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProductInfo = () => {
	return (
		<div className="  w-full mx-auto pt-12 md:py-20 md:max-w-md ">
			<div className="flex md:hidden pb-8">
				<h1 className=" text-3xl font-semibold ml-4">Confirm & pay</h1>
			</div>
			<Card className=" md:max-w-sm rounded-xl md:rounded-3xl ">
				<div className=" p-3">
					<div className=" w-full">
						<Carousel className="w-full  mx-auto">
							<CarouselContent>
								{Array.from({ length: 5 }).map((_, index) => (
									<CarouselItem key={index}>
										<div className="p-1">
											<Card className=" bg-transparent border-none rounded-3xl">
												<CardContent className="flex aspect-[4/2.2] items-center justify-center p-6 rounded-3xl relative">
													<Badge
														variant="outline"
														className=" absolute top-4 left-4 bg-white text-black z-10 rounded-md px-2 py-1"
													>
														<Trophy
															size={15}
															className="mr-1"
														/>
														Bestseller
													</Badge>
													<Image
														src="/test.jpg"
														alt="sf"
														fill
														className="rounded-3xl w-full h-full object-cover"
													/>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className=" ml-16" />
							<CarouselNext className=" mr-16" />
						</Carousel>
					</div>

					<div className="py-3 ">
						<div className="flex items-center">
							<Star
								size={20}
								className="text-primary-foreground mr-1"
							/>
							<span className=" text-sm font-semibold ">4.9</span>
							<span className=" text-sm text-gray-500">
								(4.5k) • Category
							</span>
						</div>
						<p className="pt-1 font-semibold tracking-wide">
							Amsterdam open boat canal cruise - Live Guiye - from
							Anne Frank Housef
						</p>
					</div>

					<div className=" py-3 space-y-3">
						<div className=" flex gap-3 items-center">
							<TicketCheck />
							<span className=" text-sm font-semibold">
								{"<ticket type-varient>"}
							</span>
						</div>
						<div className=" flex gap-3 flex-col">
							<div className=" flex gap-3 items-center">
								<Calendar />
								<p className=" text-sm font-semibold">
									{"<day> - <months> - <date>"}
								</p>
							</div>
							<p className=" text-xs md:text-sm ml-8 text-gray-500">
								Duration: {"<duration>"}
							</p>
						</div>
						<div className=" flex gap-3 flex-col">
							<div className=" flex gap-3 items-center">
								<Watch />
								<span className=" text-sm font-semibold">
									time
								</span>
							</div>
							<span className="text-xs md:text-sm ml-8 text-gray-500 ">
								Operating hours: {"<time to time>"}
							</span>
						</div>
						<div className=" flex gap-3 items-center">
							<Users />
							<span className=" text-sm font-semibold">
								5 guests
							</span>
						</div>
					</div>
					<div className=" border-b-2 border-dashed "></div>
					<div className=" px-3">
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger className=" text-gray-500 text-sm underline">
									View payment summary
								</AccordionTrigger>
								<AccordionContent>
									Yes. It adheres to the WAI-ARIA design
									pattern.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<Separator />

				<div className=" p-3 pt-5">
					<div className=" flex justify-between">
						<span className="text-lg  font-semibold">
							Total payable
						</span>
						<span className=" text-lg font-semibold">$XXX</span>
					</div>

					<Badge
						variant="outline"
						className="bg-red-100 flex items-center gap-1 w-fit my-2 p-0 px-1"
					>
						<PiggyBank className="h-4 w-4" />
						<span className="text-xs text-green-500 font-normal">
							You saved {'<price>'}
						</span>
					</Badge>

					<div className=" flex items-center py-4 text-xs font-semibold text-gray-500">
						<Link
							href="/"
							className=" flex items-center underline gap-2 "
						>
							You will be charged in AED
							<AlertCircle className=" h-4 w-4" />
						</Link>
					</div>

					<div className=" py-3 text-[13px]  text-gray-500 hidden md:flex">
						<span>
							By clicking {'confirf & pay'} ,you agree to{' '}
						</span>
						<Link href="/" className=" underline text-blue-400">
							Ticket general terms and condition and cancellation
							policy.
						</Link>
					</div>

					<Button
						className=" w-full rounded-xl items-center gap-3  hidden md:flex"
						size="xl"
					>
						<Lock /> Confirm & pay
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default ProductInfo;
