import { useState } from 'react';
import iconImage from '../assets/images/icon.png';
import { HamburguerIcon, MoonIcon, SunIcon, XMarkIcon } from './Icons';
import { useTheme } from '../context/Theme';

export function Header() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<header className='sticky top-0 z-[1000] font-custom text-primary-text-color dark:text-primary-text-color-dark bg-primary dark:bg-primary-dark'>
			<section className='flex justify-between max-w-4xl mx-auto '>
				<a href='#home'>
					<div className='flex items-center gap-2 p-4 px-8 max-w-fit'>
						<img src={iconImage} className='w-8 ' alt='Coinity' />
						<p className='text-xl font-semibold'>Coinity</p>
					</div>
				</a>
				<div className='flex items-center '>
					<button
						className='relative mr-4 hover:opacity-70 h-fit after:content-[""] after:absolute after:-right-4 after:top-0 after:w-0 after:h-full after:border-l-slate-300 after:border-l dark:after:border-l-slate-700'
						onClick={toggleTheme}
					>
						{theme === 'light' ? <MoonIcon /> : <SunIcon />}
					</button>
					<nav className='hidden gap-6 p-4 pr-8 space-x-6 sm:block'>
						<a
							href='#home'
							className='font-medium text-xm hover:opacity-70 dark:opacity-70 dark:hover:opacity-100'
						>
							Home
						</a>
						<a
							href='#market'
							className='font-medium text-xm hover:opacity-70 dark:opacity-80 dark:hover:opacity-100 '
						>
							Market
						</a>
						<a
							href='#services'
							className='font-medium text-xm hover:opacity-70 dark:opacity-80 dark:hover:opacity-100 '
						>
							Services
						</a>
						<a
							href='#join'
							className='font-medium text-xm hover:opacity-70 dark:opacity-80 dark:hover:opacity-100 '
						>
							Join
						</a>
					</nav>
					<button
						className='block ml-4 mr-8 sm:hidden'
						onClick={toggleMobileMenu}
					>
						<HamburguerIcon />
					</button>
				</div>
			</section>
			<div
				className={`absolute ${
					showMobileMenu ? ' translate-x-0 ' : '  -translate-x-full '
				} transition top-0   flex  items-center justify-center w-full h-screen opacity-90 bg-primary dark:bg-primary-dark `}
			>
				<button
					className='absolute w-10 h-10 top-5 right-5 hover:opacity-70 dark:opacity-90 dark:hover:opacity-100'
					onClick={toggleMobileMenu}
				>
					<XMarkIcon />
				</button>
				<ul className='flex flex-col items-center gap-8'>
					<button></button>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#home'
							className='text-2xl font-semibold hover:opacity-70 dark:opacity-80 dark:hover:opacity-100'
						>
							Home
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#market'
							className='text-2xl font-semibold hover:opacity-70 dark:opacity-80 dark:hover:opacity-100'
						>
							Market
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#services'
							className='text-2xl font-semibold hover:opacity-70 dark:opacity-80 dark:hover:opacity-100'
						>
							Services
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#join'
							className='text-2xl font-semibold hover:opacity-70 dark:opacity-80 dark:hover:opacity-100'
						>
							Join
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
