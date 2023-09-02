import JoinImg from '../assets/images/JoinImg.svg';

export function Join() {
	return (
		<section
			id='join'
			className='max-w-4xl px-8 pt-12 pb-8 mx-auto scroll-mt-8'
		>
			<h2 className='mb-2 text-4xl font-semibold text-center'>
				Become a Member
			</h2>
			<p className='max-w-xl mx-auto text-center opacity-70'>
				Discover a world of possibilities as we invite you to be part of our
				journey, where innovation and passion unite.
			</p>
			<div className='w-[50%] min-w-[16rem] mx-auto'>
				<img
					src={JoinImg}
					alt='Investing Bitcoin Illustration by Robin`s Pixel'
				/>
			</div>
			<div className='relative text-center -top-20'>
				<button
					className='p-4 sm:p-6 bg-[#3772ff] shadow-[0_-25px_50px_35px_rgba(155,155,255,0.8)]
          dark:shadow-[0_-25px_50px_35px_rgba(155,155,255,0.5)]  md:shadow-[0_-55px_100px_105px_rgba(155,155,255,0.4)] 
        md:dark:shadow-[0_-55px_100px_105px_rgba(155,155,255,0.3)]
        md:dark:hover:shadow-[2px_2px_10px_1px_rgba(25,25,25,0.3)] 
        text-primary-text-color-dark rounded-xl hover:text-[#3772ff] hover:bg-white transition-all ease-in-out  duration-300 hover:shadow-[2px_2px_10px_1px_rgba(25,25,25,0.3)] '
				>
					<a href='https://discord.com/' target='_BLANK' rel='noopener'>
						<div className='flex items-center gap-2 '>
							<i className='fa-brands fa-discord'></i>
							<p className='font-semibold'>Join Via Discord</p>
						</div>
					</a>
				</button>
			</div>
		</section>
	);
}
