import { coin } from '../services/api';

export function TrendingIcon({ coin }: { coin: coin }) {
	return (
		<div>
			<div className='flex items-center gap-4'>
				<img src={`${coin.item.small}`} alt={coin.item.name} />
				<div className='flex flex-col gap-0'>
					<p className='font-semibold'>
						{coin.item.name}{' '}
						<span className='opacity-60'>{coin.item.symbol}</span>
					</p>
					<span className='text-[1rem] font-normal '>
						{coin.item.price_btc.toFixed(8)}{' '}
						<b className='text-[#ffbe55]'>BTC</b>
					</span>
					<span className='text-xs opacity-60'>
						Market Cap Rank: <b>{coin.item.market_cap_rank}</b>
					</span>
				</div>
			</div>
		</div>
	);
}
