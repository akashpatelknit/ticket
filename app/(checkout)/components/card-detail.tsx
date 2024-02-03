'use client';

import * as z from 'zod';

import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import { AlertCircle, CreditCard, Lock, PiggyBank, Trophy } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
	name: z.string().min(1),
	cardNumber: z.string().min(1),
	expiry: z.string().min(1),
	cvv: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

const CardDetail = () => {
	const [selected, setSelected] = useState<boolean>(false);

	const onCardSelect = () => {
		setSelected(!selected);
		console.log(selected);
	};
	const defaultValues = {
		name: '',
		cardNumber: '',
		expiry: '',
		cvv: '',
	};

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	return (
		<div className=" ">
			{/* Heading */}
			<div className=" py-10">
				<Heading
					title="Select your mode of payment"
					description="Payment with Tickete are secure and encrypted."
				/>
			</div>

			{/* Card Details Form */}
			<Card
				className={`p-5 rounded-2xl ${
					selected ? 'border-black border-2' : ''
				}`}
			>
				<div className=" flex items-center justify-between py-5">
					<div className=" flex items-center gap-3">
						<Card className=" p-2 h-5 flex items-center rounded-md">
							<CreditCard />
						</Card>
						<span className=" font-semibold">
							Credit & debit card
						</span>
					</div>
					<div
						className={`${selected === true ? 'flex' : 'hidden'}`}
						onClick={onCardSelect}
					>
						<div className=" h-6 w-6 rounded-full bg-black relative cursor-pointer">
							<div className=" h-3 w-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
						</div>
					</div>
					<div
						className={`${selected === true ? 'hidden' : 'flex'}`}
						onClick={onCardSelect}
					>
						<div className=" h-6 w-6 rounded-full border-[3px] border-gray-500 relative cursor-pointer"></div>
					</div>
				</div>

				<div className=" flex gap-3 py-3 pb-8">
					<Card className=" px-2 h-5 flex items-center rounded-md">
						<Image src="/visa.png" alt="" width="20" height="15" />
					</Card>
					<Card className=" px-2 h-5 flex items-center rounded-md">
						<Image
							src="/mastercard.png"
							alt=""
							width="20"
							height="15"
						/>
					</Card>
					<Card className=" px-2 h-5 flex items-center rounded-md">
						<Image
							src="/diners.png"
							alt=""
							width="20"
							height="15"
						/>
					</Card>
				</div>

				<Separator className=" my-5 flex md:hidden" />

				{/* CArd Details Form */}
				<Form {...form}>
					<form className=" ">
						<div className="md:grid md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl className=" h-12 md:h-14 rounded-xl md:rounded-2xl text-sm md:text-[1rem]">
											<Input
												type="text"
												placeholder="Name on card *"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="cardNumber"
								render={({ field }) => (
									<FormItem>
										<FormControl className=" h-12 md:h-14 rounded-xl md:rounded-2xl text-sm md:text-[1rem]">
											<Input
												type="text"
												placeholder="Card number *"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="expiry"
								render={({ field }) => (
									<FormItem>
										<FormControl className="  h-12 md:h-14 rounded-xl md:rounded-2xl text-sm md:text-[1rem]">
											<Input
												type="text"
												placeholder="Expiry date *"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="cvv"
								render={({ field }) => (
									<FormItem>
										<FormControl className="  h-12 md:h-14 rounded-xl md:rounded-2xl text-sm md:text-[1rem]">
											<Input
												type="text"
												placeholder="<CVV/>CVC> *"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</form>
				</Form>

				<Separator className=" my-5 md:mt-8" />

				<div className=" md:p-3 pt-3 md:pt-0">
					<div className=" flex flex-col-reverse items-start md:flex-row justify-between md:items-center gap-2 md:gap-0">
						<span className="font-semibold text-lg">
							Total payable $XXX
						</span>

						<Badge
							variant="outline"
							className="bg-[#299764] flex items-center gap-1 w-fit px-2"
						>
							<PiggyBank className="h-4 w-4 text-white" />
							<span className="text-xs text-white font-normal">
								You save $40
							</span>
						</Badge>
					</div>
					<div className=" flex items-center py-3 text-xs font-semibold text-gray-500">
						<Link
							href="/"
							className=" flex items-center underline gap-2 "
						>
							You will be charged in AED
							<AlertCircle className=" h-4 w-4" />
						</Link>
					</div>

					<div className=" py-5 text-[13px]  text-gray-500">
						<span>
							By clicking {'confirf & pay'} ,you agree to{' '}
						</span>
						<Link href="/" className=" underline text-blue-600">
							Ticket general terms and condition and cancellation
							policy.
						</Link>
					</div>

					<Button
						className=" rounded-xl flex items-center gap-3 px-10 w-full text-lg md:text-[1rem]"
						size="xl"
					>
						<Lock /> Confirm & pay
					</Button>
				</div>
			</Card>

			{/* Comming Soon payment methods*/}
			<Card className="p-7 my-5 rounded-2xl bg-[#F9F9FB] flex justify-between opacity-60">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-0 bg-gray-200 rounded-md p-[1px] px-1">
						<Image
							src="/a.png"
							alt="apple "
							width="20"
							height="20"
						/>
						<span className="font-semibold text-gray-500">Pay</span>
					</div>
					<span className=" font-semibold text-gray-500">
						Coming soom
					</span>
				</div>
				<div className="h-6 w-6 rounded-full bg-gray-200"></div>
			</Card>
			<Card className="p-7 my-3 rounded-2xl bg-[#F9F9FB] flex justify-between opacity-60">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-0 bg-gray-200 rounded-md p-[1px] px-1">
						<Image
							src="/g.png"
							alt="apple "
							width="20"
							height="20"
						/>
						<span className="font-semibold text-gray-500">Pay</span>
					</div>
					<span className=" font-semibold text-gray-500">
						Coming soom
					</span>
				</div>
				<div className="h-6 w-6 rounded-full bg-gray-200"></div>
			</Card>

			<Separator className=" my-10" />

			{/* Total payable */}
			<div className=" py-5">
				<Badge
					variant="outline"
					className="bg-red-100 flex items-center gap-1 w-fit my-2 p-0 px-2 py-1 border-2"
				>
					<PiggyBank className="h-4 w-4" />
					<span className="text-xs text-green-500 font-normal">
						You saved {'<price>'}
					</span>
				</Badge>
				<Heading title="Total Payable : $XXX" description="" />
			</div>

			{/* You will be charged in AED */}
			<Card className="p-3  rounded-2xl">
				<div>
					<div className=" font-semibold flex  gap-3 items-start">
						<AlertCircle className="h-10 w-10 md:w-5" />
						<div className="pt-2">
							<span className=" text-sm">
								You will charged in AED
							</span>
							<br />
							<span className=" text-gray-500 font-normal text-sm">
								The price showen here is in US Doller (USD) as
								per the current convertion rate. You will be
								charged in United Arab Emirates Dirham (AED).
							</span>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default CardDetail;
