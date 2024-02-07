'use Client';

import { ModeToggle } from './ui/toggle-mode';
import UserButton from './UserButton';

export default function Nav() {
	return (
		<header>
			<nav>
				<ul className='flex justify-between items-center'>
					<li>
						<ModeToggle />
					</li>
					<li>
						<UserButton />
					</li>
				</ul>
			</nav>
		</header>
	);
}
