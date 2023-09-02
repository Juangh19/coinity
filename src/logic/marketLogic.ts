import { CryptocurrenciesByMarketCap } from '../services/api';

export type SortOrder = 'ascendent' | 'descendent' | null;

export enum SortBy {
	NONE = 'none',
	PRICE = 'price',
	MARKET_CAP = 'market_cap',
	VOLUME = 'volume',
	NAME = 'name',
	PERCENTAGE_24H = 'percentage_24h',
	PERCENTAGE_7D = 'percentage_7d',
}

interface sortCryptoCurrenciesProps {
	cryptoCurrencies: CryptocurrenciesByMarketCap;
	sortBy: SortBy;
	sortOrder: SortOrder;
}

export function sortCryptoCurrencies({
	cryptoCurrencies,
	sortBy,
	sortOrder,
}: sortCryptoCurrenciesProps) {
	if (sortBy === SortBy.NONE) return cryptoCurrencies;
	if (sortBy === SortBy.NAME) {
		return cryptoCurrencies.sort((a, b) => {
			if (sortOrder === 'ascendent') {
				const sorted = b.name.localeCompare(a.name);
				return sorted;
			} else {
				return a.name.localeCompare(b.name);
			}
		});
	}
	if (sortBy === SortBy.PRICE) {
		return cryptoCurrencies.sort((a, b) => {
			if (sortOrder === 'ascendent') {
				return a.current_price - b.current_price;
			} else {
				return b.current_price - a.current_price;
			}
		});
	}
	if (sortBy === SortBy.MARKET_CAP) {
		return cryptoCurrencies.sort((a, b) => {
			if (sortOrder === 'ascendent') {
				return a.market_cap - b.market_cap;
			} else {
				return b.market_cap - a.market_cap;
			}
		});
	}
	if (sortBy === SortBy.PERCENTAGE_24H) {
		return cryptoCurrencies.sort((a, b) => {
			if (sortOrder === 'ascendent') {
				return (
					a.price_change_percentage_24h_in_currency -
					b.price_change_percentage_24h_in_currency
				);
			} else {
				return (
					b.price_change_percentage_24h_in_currency -
					a.price_change_percentage_24h_in_currency
				);
			}
		});
	}
	if (sortBy === SortBy.PERCENTAGE_7D) {
		return cryptoCurrencies.sort((a, b) => {
			if (sortOrder === 'ascendent') {
				return (
					a.price_change_percentage_7d_in_currency -
					b.price_change_percentage_7d_in_currency
				);
			} else {
				return (
					b.price_change_percentage_7d_in_currency -
					a.price_change_percentage_7d_in_currency
				);
			}
		});
	}
	if (sortBy === SortBy.VOLUME) {
		return cryptoCurrencies.sort((a, b) => {
			if (sortOrder === 'ascendent') {
				return a.total_volume - b.total_volume;
			} else {
				return b.total_volume - a.total_volume;
			}
		});
	}
	return cryptoCurrencies;
}
