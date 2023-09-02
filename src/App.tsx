import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Join } from './components/Join';
import { Market } from './components/Market';
import { Services } from './components/Services';
import ThemeContextProvider from './context/Theme';

function App() {
	return (
		<>
			<ThemeContextProvider>
				<Header />
				<main className='border-t bg-primary dark:bg-primary-dark font-custom text-primary-text-color dark:text-primary-text-color-dark dark:border-t-gray-600 dark:border-opacity-75'>
					<Hero />
					<Market />
					<Services />
					<Join />
				</main>
				<Footer />
			</ThemeContextProvider>
		</>
	);
}

export default App;
