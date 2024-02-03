'use client';

import * as z from 'zod';
import { AlertCircle } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Heading from '@/components/ui/heading';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import CardDetail from './card-detail';

const formSchema = z.object({
	name: z.string().min(1),
	phone: z.string().min(1),
	email: z.string().email(),
	confirmEmail: z.string().email(),
	countryCode: z.string().min(1),
	label: z.string().min(1),
	labelSelect: z.string().min(1),
	labelMultiSelect: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutForm = () => {
	const defaultValues = {
		name: '',
		phone: '',
		email: '',
		confirmEmail: '',
		countryCode: '',
	};

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	return (
		<div className=" w-full max-w-4xl md:p-5">
			<div className=" py-16 hidden md:flex">
				<h1 className=" text-6xl font-semibold">Confirm & pay</h1>
			</div>

			<Card className=" rounded-xl p-0 h-28">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
					<CardTitle className="font-semibold text-[15px]">
						Free cancellation
					</CardTitle>
					<AlertCircle className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent className="text-sm text-gray-500">
					Tickets can be cancelled by 13th <br /> December, 2022.
				</CardContent>
			</Card>
			<Separator className="my-6" />
			<div className=" py-10 pt-5 md:pt-16">
				<Heading
					title="Enter your details"
					description="We will be sending your ticket to the details below. Booking for a friend? Add their details"
				/>
			</div>

			<Form {...form}>
				<form className=" w-full space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl className=" h-16 rounded-2xl text-lg ">
									<Input
										placeholder="Full name*"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="md:grid md:grid-cols-2 gap-8">
						<FormField
							control={form.control}
							name="countryCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel></FormLabel>
									<Select
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl className=" h-16 rounded-2xl text-lg ">
											<SelectTrigger>
												<SelectValue
													defaultValue={field.value}
													placeholder="Country code *"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{/* {categories.map((category) => (
												<SelectItem
													key={category.id}
													value={category.id}
												>
													{category.name}
												</SelectItem>
											))} */}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem className="  pt-8 md:py-0">
									<FormControl className=" h-16 rounded-2xl text-lg ">
										<Input
											placeholder="Phone number *"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="  pt-8 md:py-0">
									<FormControl className=" h-16 rounded-2xl text-lg ">
										<Input
											type="text"
											placeholder="Email *"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmEmail"
							render={({ field }) => (
								<FormItem className="  pt-8 md:py-0">
									<FormControl className=" h-16 rounded-2xl text-lg ">
										<Input
											type="text"
											placeholder="Confirm email *"
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

			<Separator className="my-10" />

			<div className=" py-10 pt-16">
				<Heading
					title="Additional information"
					description="We need a few more details to complete your reservation"
				/>
			</div>

			<Form {...form}>
				<form className=" w-full space-y-8">
					<div className="md:grid md:grid-cols-2 gap-8 ">
						<FormField
							control={form.control}
							name="label"
							render={({ field }) => (
								<FormItem>
									<FormControl className=" h-16 rounded-2xl text-lg ">
										<Input
											type="text"
											placeholder="Input label *"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="labelSelect"
							render={({ field }) => (
								<FormItem className="  pt-8 md:py-0">
									<Select
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl className=" h-16 rounded-2xl text-lg ">
											<SelectTrigger>
												<SelectValue
													defaultValue={field.value}
													placeholder="Select *"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{/* {categories.map((category) => (
												<SelectItem
													key={category.id}
													value={category.id}
												>
													{category.name}
												</SelectItem>
											))} */}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="labelMultiSelect"
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}
								>
									<FormControl className=" h-16 rounded-2xl text-lg ">
										<SelectTrigger>
											<SelectValue
												defaultValue={field.value}
												placeholder="MultiSelect *"
											/>
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{/* {categories.map((category) => (
												<SelectItem
													key={category.id}
													value={category.id}
												>
													{category.name}
												</SelectItem>
											))} */}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>

			<Separator className="my-10" />
			<CardDetail />
		</div>
	);
};

export default CheckoutForm;
