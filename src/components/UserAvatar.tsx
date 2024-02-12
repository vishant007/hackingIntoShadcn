import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function UserAvatar({
	name,
	image,
	className,
}: {
	name: string;
	image: string;
	className?: string;
}) {
	return (
		<Avatar className={cn('bg-white text-black, className')}>
			{image && (
				<img
					src={image}
					alt={name}
					width={50}
					height={50}
					className='rounded-full'
				/>
			)}
			<AvatarFallback className='dark:bg-white dark:text-black text-lg'>
				{name
					?.split(' ')
					.map((n) => n[0])
					.join('')}
			</AvatarFallback>
		</Avatar>
	);
}

export default UserAvatar;
