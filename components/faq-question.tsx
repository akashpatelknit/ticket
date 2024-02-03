import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion-faq';

const FAQQuestion = () => {
	return (
		<div>
			<Accordion type="single" collapsible className="w-full space-y-5">
				<AccordionItem
					value="item-1"
					className="border-[2px] rounded-xl md:rounded-2xl p-2 md:p-3 "
				>
					<AccordionTrigger className=" text-sm md:text-lg font-semibold">
						What should i do on my first trip to Rome?
					</AccordionTrigger>
					<AccordionContent className=" text-gray-500 text-sm md:text-[1rem]">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Tempora amet voluptas quas, dolorum fugit omnis
						voluptatum repellendus maiores pariatur molestias?
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="item-2"
					className="border-[2px] rounded-xl md:rounded-2xl p-2 md:p-3"
				>
					<AccordionTrigger className=" text-sm md:text-lg font-semibold">
						What are some hidden gems to see in Rome?
					</AccordionTrigger>
					<AccordionContent className=" text-gray-500 text-sm md:text-[1rem]">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Voluptatum suscipit laudantium aliquam vero
						deserunt aliquid nam rerum harum! Maxime soluta nisi
						delectus laborum aliquam deleniti veritatis iusto
						consequatur autem ab.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value="item-3"
					className="border-[2px] rounded-xl md:rounded-2xl p-2 md:p-3"
				>
					<AccordionTrigger className=" text-sm md:text-lg font-semibold">
						How much time should I spend in Rome?
					</AccordionTrigger>
					<AccordionContent className=" text-gray-500 text-sm md:text-[1rem] ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa, repellendus doloremque. Recusandae neque expedita
						dolor in non minima quasi placeat ea repellat delectus
						perferendis inventore tempora itaque repellendus
						explicabo adipisci unde, dolorum ipsam porro assumenda
						et? Rerum, quos suscipit. Dicta.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value="item-4"
					className="border-[2px] rounded-xl md:rounded-2xl p-2 md:p-3"
				>
					<AccordionTrigger className=" text-sm md:text-lg font-semibold">
						What food is Rome Known for?
					</AccordionTrigger>
					<AccordionContent className=" text-gray-500 text-sm md:text-[1rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Blanditiis id minus fuga quaerat, provident odit debitis
						vel assumenda doloribus tempore.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value="item-5"
					className="border-[2px] rounded-xl md:rounded-2xl p-2 md:p-3"
				>
					<AccordionTrigger className=" text-sm md:text-lg font-semibold">
						What is the best way to get around Rome?
					</AccordionTrigger>
					<AccordionContent className=" text-gray-500 text-sm md:text-[1rem]">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Ab unde dolorum exercitationem rem aut vitae sed
						neque rerum, quisquam porro, itaque voluptates
						reprehenderit, id iste.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default FAQQuestion;
