/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from './Icons';
import {
	CryptocurrenciesByMarketCap,
	fetchCryptocurrenciesByMarketCap,
} from '../services/api';
import { sortCryptoCurrencies } from '../logic/marketLogic';
import { SortBy, SortOrder } from '../logic/marketLogic';

export function Market() {
	const [page, setPage] = useState(1);
	const [cryptocurrencies, setCryptocurrencies] =
		useState<CryptocurrenciesByMarketCap>([]);
	const [sortBy, setSortBy] = useState<SortBy>(SortBy.MARKET_CAP);
	const [sortOrder, setSortOrder] = useState<SortOrder>(null);

	const handleSortClick = (clickedSortBy: SortBy) => {
		if (sortBy === clickedSortBy) {
			setSortOrder(sortOrder === 'ascendent' ? 'descendent' : 'ascendent');
		} else {
			setSortBy(clickedSortBy);
			setSortOrder('descendent');
		}
	};

	const sortedCryptocurrencies = sortCryptoCurrencies({
		cryptoCurrencies: cryptocurrencies,
		sortBy: sortBy,
		sortOrder: sortOrder,
	});

	useEffect(() => {
		fetchCryptocurrenciesByMarketCap(page)
			.then((data) => setCryptocurrencies([...cryptocurrencies, ...data]))
			.catch((error) => console.log(error));
	}, [page]);

	const formatNumberWithNoCommas = (number: number) => {
		const integerNumber = Math.round(number);

		return integerNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const formatNumberWithCommas = (number: number) => {
		const numberAsString = number.toString().split('.');

		const integerNumber = numberAsString[0].replace(
			/\B(?=(\d{3})+(?!\d))/g,
			','
		);

		if (numberAsString[1]?.length === 1)
			numberAsString[1] = numberAsString[1] + '0';

		return `${integerNumber}.${numberAsString[1] ? numberAsString[1] : '00'}`;
	};

	return (
		<section
			id='market'
			className='w-full max-w-4xl px-8 pt-32 mx-auto overflow-hidden -scroll-mt-16 '
		>
			<div className='overflow-x-auto '>
				<table className='w-[52rem]'>
					<thead className='text-xs font-light '>
						<tr className='border-b border-b-slate-300'>
							<th className='py-6 '>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.MARKET_CAP)}
								>
									<span>#</span>
									<ChevronUpDownIcon />
								</div>
							</th>
							<th>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.NAME)}
								>
									<span>Name</span>
									<ChevronUpDownIcon />
								</div>
							</th>
							<th>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.PRICE)}
								>
									<span>Price (USD)</span>
									<ChevronUpDownIcon />
								</div>
							</th>
							<th>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.PERCENTAGE_24H)}
								>
									<span>24h %</span>
									<ChevronUpDownIcon />
								</div>
							</th>
							<th>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.PERCENTAGE_7D)}
								>
									<span>7d %</span>
									<ChevronUpDownIcon />
								</div>
							</th>

							<th>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.MARKET_CAP)}
								>
									<span>Market Cap (USD)</span>
									<ChevronUpDownIcon />
								</div>
							</th>
							<th>
								<div
									className='flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100'
									onClick={() => handleSortClick(SortBy.VOLUME)}
								>
									<span>Total Volume</span>
									<ChevronUpDownIcon />
								</div>
							</th>
						</tr>
					</thead>
					<tbody className='font-semibold'>
						{sortedCryptocurrencies.map((cryptocurrency) => {
							return (
								<tr key={cryptocurrency.id} className='last:pb-0 last:mb-4'>
									<td className='pt-10 pr-4 text-center '>
										{cryptocurrency.market_cap_rank}
									</td>
									<td className='pt-10 '>
										<div className='flex items-center justify-start gap-3 t-12'>
											<img
												className='w-6'
												src={`${cryptocurrency.image}`}
												alt={`${cryptocurrency.name}`}
											/>
											<span className='w-min'>{cryptocurrency.name}</span>
											<span className='opacity-50'>
												{cryptocurrency.symbol}
											</span>
										</div>
									</td>
									<td className='pt-10'>
										${' '}
										{formatNumberWithCommas(
											Number(cryptocurrency.current_price.toFixed(2))
										)}
									</td>
									<td className='pt-10'>
										{cryptocurrency.price_change_percentage_24h_in_currency >
										0 ? (
											<span className='flex items-center text-green-500'>
												<ChevronUpIcon />
												{cryptocurrency.price_change_percentage_24h_in_currency.toFixed(
													2
												)}
											</span>
										) : cryptocurrency.price_change_percentage_24h_in_currency <
										  0 ? (
											<span className='flex text-red-500'>
												<ChevronDownIcon />
												{cryptocurrency.price_change_percentage_24h_in_currency
													.toFixed(2)
													.slice(1)}
											</span>
										) : (
											<span>-</span>
										)}
									</td>
									<td className='pt-10'>
										{cryptocurrency.price_change_percentage_7d_in_currency >
										0 ? (
											<span className='flex items-center text-green-500'>
												<ChevronUpIcon />
												{cryptocurrency.price_change_percentage_7d_in_currency.toFixed(
													2
												)}
											</span>
										) : cryptocurrency.price_change_percentage_7d_in_currency <
										  0 ? (
											<span className='flex text-red-500'>
												<ChevronDownIcon />
												{cryptocurrency.price_change_percentage_7d_in_currency
													.toFixed(2)
													.slice(1)}
											</span>
										) : (
											<span>-</span>
										)}
									</td>
									<td className='pt-10'>
										$ {formatNumberWithNoCommas(cryptocurrency.market_cap)}
									</td>
									<td className='pt-10'>
										$ {formatNumberWithNoCommas(cryptocurrency.total_volume)}
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot className='mt-2'>
						<tr>
							<td colSpan={7} className='py-5 text-center border-b '></td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className='pt-4 mb-8 text-center'>
				<button
					className='text-xl opacity-60 hover:opacity-100'
					onClick={() => setPage(page + 1)}
				>
					Load More
				</button>
			</div>
		</section>
	);
}
