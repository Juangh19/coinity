import iconGray from '../assets/images/iconGray.png';
import iconBlack from '../assets/images/iconBlack.png';
import { useTheme } from '../context/Theme';

export function Footer() {
	const { theme } = useTheme();

	return (
		<footer className='bg-[#d5e5ea] dark:bg-[#3772ff] font-custom text-primary-text-color dark:text-primary-text-color-dark'>
			<section className='flex flex-col items-center max-w-4xl gap-4 p-12 mx-auto'>
				<a href='#home'>
					<div className='flex items-center gap-2 text-xl font-semibold'>
						{theme === 'light' ? (
							<img src={iconBlack} className='w-8' alt='Coinity' />
						) : (
							<img src={iconGray} className='w-8' alt='Coinity' />
						)}

						<span>Coinity </span>
					</div>
				</a>
				<hr />
				<div className='flex justify-between gap-8 text-3xl'>
					<a
						href='https://www.instagram.com/'
						className='hover:text-[#3772ff] transition ease-in-out duration-200 hover:dark:text-primary-text-color'
						target='_BLANK'
						rel='noopener'
					>
						<i className='fab fa-instagram'></i>
					</a>
					<a
						href='https://www.facebook.com/'
						className='hover:text-[#3772ff] transition ease-in-out duration-200 hover:dark:text-primary-text-color'
						target='_BLANK'
						rel='noopener'
					>
						<i className='fab fa-facebook'></i>
					</a>
					<a
						href='https://www.twitter.com/'
						className='hover:text-[#3772ff] transition ease-in-out duration-200 hover:dark:text-primary-text-color'
						target='_BLANK'
						rel='noopener'
					>
						<i className='fab fa-twitter'></i>
					</a>
				</div>
				<div>
					<div className='flex justify-center gap-2 mb-1'>
						<a href=''>Terms of Use</a>
						<a href=''>Privacy Policy</a>
					</div>
					<p className='opacity-70'>
						© {new Date().getFullYear()} Coinity. All rights reserved.
					</p>
				</div>
			</section>
		</footer>
	);
}
