import Header from '@/components/header';
import CheckoutForm from './components/checkout-form';
import ProductInfo from './components/product-info';
import CardDetail from './components/card-detail';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import FAQs from '@/components/faqs';
import FAQQuestion from '@/components/faq-question';

export default function Checkout() {
	return (
		<div>
			<Header />
			<Container>
				<div className=" flex flex-col-reverse md:flex-row justify-between  gap-5">
					<CheckoutForm />
					<ProductInfo />
				</div>
				<Separator className=" my-10" />
			</Container>
			<Container>
				<FAQs />
			</Container>
		</div>
	);
}
