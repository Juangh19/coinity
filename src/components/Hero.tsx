import { useEffect, useState } from 'react';
import HeroImg from '../assets/images/HeroImg.svg';
import { fetchGlobalData, fetchTrendingCoins, coin } from '../services/api';
import { TrendingIcon } from './TrendingCoin';

export function Hero() {
	const [activeCurrencies, setActiveCurrencies] = useState<number | null>(null);
	const [trendingCoins, setTrendingCoins] = useState<coin[]>([]);

	useEffect(() => {
		fetchGlobalData()
			.then((data) => {
				setActiveCurrencies(data?.data.active_cryptocurrencies);
			})
			.catch((error) => {
				console.log('Error fetching global data', error);
			});
	}, []);

	useEffect(() => {
		fetchTrendingCoins()
			.then((data) => {
				setTrendingCoins(data?.coins.slice(0, 3));
			})
			.catch((error) => {
				console.log('Error fetching trending coins', error);
			});
	}, []);

	return (
		<div className='bg-[#d5e5ea] dark:bg-gradient-to-tl dark:from-[#272a35] dark:to-[#22404f]'>
			<section
				id='home'
				className='flex flex-col items-center justify-between max-w-4xl p-8 mx-auto scroll-mt-40 md:pr-0 md:flex-row'
			>
				<article className='w-full text-center md:text-left md:max-w-sm'>
					<h1 className='mb-4 text-3xl md:text-[2.5rem] md:leading-[1.125]     font-semibold  '>
						Current Cryptocurrency Market
					</h1>
					<p className='dark:text-slate-400'>
						There are currently over <strong>{activeCurrencies}</strong> active
						cryptocurrencies in the global crypto market.
					</p>
				</article>
				<div className='w-full max-w-sm md:max-w-none grow'>
					<img
						src={HeroImg}
						className='w-full'
						alt='Cryptocurrency Illustration by Delesign Graphics'
					/>
				</div>
			</section>
			<section className='absolute max-w-[832px] -translate-x-1/2 -translate-y-[40%]   rounded-lg shadow-2xl left-1/2 w-full overflow-hidden overflow-x-auto bg-primary dark:bg-[#242833] '>
				<div className='max-w-[832px] min-w-max p-4'>
					<h3 className='box-content pb-[10px] text-2xl font-semibold border-b border-b-slate-300 dark:border-b-slate-500'>
						⭐ Trending Coins
					</h3>
					<div className='flex justify-between gap-4 mt-2'>
						{trendingCoins.map((coin) => (
							<TrendingIcon key={coin.item.id} coin={coin} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
