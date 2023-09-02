import {
	ArrowTrendingUpIcon,
	CurrencyDollarIcon,
	LockClosedIcon,
	RocketIcon,
	ShieldCheckIcon,
	ViewFinderIcon,
} from './Icons';
import { ServiceCard } from './ServiceCard';

export function Services() {
	return (
		<div className='w-full bg-[#d5e5ea]  dark:bg-gradient-to-tl dark:from-[#272a35] dark:to-[#22404f]'>
			<section
				id='services'
				className='max-w-4xl px-8 pb-16 mx-auto scroll-mt-16'
			>
				<h2 className='py-12 text-4xl font-semibold text-center '>
					Unlocking Crypto Potential
				</h2>
				<div className='grid gap-4 sm:grid-cols-2 '>
					<ServiceCard
						icon={<LockClosedIcon color='#3772ff' />}
						title='Utmost security'
						description='Cutting-edge Anti-Hacker system of the highest caliber'
					/>
					<ServiceCard
						icon={<RocketIcon color='#3772ff' />}
						title='Top speed'
						description='The quickest and most resilient platform in the area'
					/>
					{/* <ServiceCard
						icon={<ForwardIcon color='#3772ff' />}
						title='Rapid deposit'
						description='Cryptocurrency deposits instantly credited'
					/> */}
					<ServiceCard
						icon={<ArrowTrendingUpIcon color='#3772ff' />}
						title='Stop-Limit feature'
						description='Advanced trading system incorporating Stop Limit'
					/>
					<ServiceCard
						icon={<ShieldCheckIcon color='#3772ff' />}
						title='Asset protection'
						description='Safekeeping of funds in multi-signature physical vaults'
					/>
					<ServiceCard
						icon={<CurrencyDollarIcon color='#3772ff' />}
						title='Currency Exchange'
						description='Deposit and purchase directly with your local currency'
					/>
					<ServiceCard
						icon={<ViewFinderIcon color='#3772ff' />}
						title='Trading View Integration'
						description='Utilizes the finest graphic tools for trading operations'
					/>
				</div>
			</section>
		</div>
	);
}
