interface GlobalData {
	data: {
		active_cryptocurrencies: number;
	};
}

interface TrendingCoins {
	coins: coin[];
}

export interface coin {
	item: {
		id: string;
		name: string;
		symbol: string;
		market_cap_rank: number;
		price_btc: number;
		small: string;
	};
}

export async function fetchGlobalData(): Promise<GlobalData> {
	const response = await fetch('https://api.coingecko.com/api/v3/global');
	const data: GlobalData = await response.json();
	return data;
}

export async function fetchTrendingCoins(): Promise<TrendingCoins> {
	const response = await fetch(
		'https://api.coingecko.com/api/v3/search/trending'
	);
	const data: TrendingCoins = await response.json();

	return data;
}

export type CryptocurrenciesByMarketCap = Cryptocurrency[];

interface Cryptocurrency {
	id: string;
	market_cap_rank: number;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	price_change_percentage_24h_in_currency: number;
	price_change_percentage_7d_in_currency: number;
	price_change_percentage_30d_in_currency: number;
	market_cap: number;
	total_volume: number;
}

export async function fetchCryptocurrenciesByMarketCap(
	page: number
): Promise<CryptocurrenciesByMarketCap> {
	const response = await fetch(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&price_change_percentage=24h%2C7d%2C30d&locale=en`
	);
	const data: CryptocurrenciesByMarketCap = await response.json();

	return data;
}
