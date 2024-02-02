'use Client';

import { ModeToggle } from './ui/toggle-mode';

export default function Nav() {
	return (
		<header>
			<nav>
				<ul className='flex justify-between items-center'>
					<li>
						<ModeToggle />
					</li>
				</ul>
			</nav>
		</header>
	);
}
