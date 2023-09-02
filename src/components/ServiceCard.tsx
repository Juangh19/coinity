type ServiceCardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
	return (
		<div className='flex items-center min-w-[200px] gap-4 px-6 py-8 dark:bg-[#242833]  bg-primary   rounded-xl hover:scale-[1.025]  transition '>
			<div className='w-12 h-12 text-blue min-w-[2.5rem] '>{icon}</div>
			<div>
				<p className='mb-1 text-2xl font-semibold'>{title}</p>
				<p className='opacity-70'>{description}</p>
			</div>
		</div>
	);
}
