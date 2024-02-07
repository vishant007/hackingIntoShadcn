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
		<Avatar className={cn('bg-white text-black', className)}>
			{image && (
				<img
					src={image}
					alt={name}
					width={40}
					height={40}
					className='rounded-full'
				/>
			)}
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
}

export default UserAvatar;
