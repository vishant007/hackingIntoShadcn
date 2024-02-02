import Nav from '@/components/Nav';
import { NavigationMenuDemo } from '@/components/NavigationMenuDemo';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<main className='  p-24'>
			<Nav />
			<div className=' flex flex-col gap-8 items-center justify-center'>
				<NavigationMenuDemo />
			</div>
			<section className='py-24 flex flex-col gap-8 items-center justify-center'>
				<h1 className='text-4xl font-bold'>Shadcn Is W</h1>
				<p className='text-2xl text-muted-foreground'>
					Started hacking shadcn!!
				</p>
				<div className='flex gap-6 items-center justify-center'>
					<Button>Click me</Button>
				</div>
			</section>
		</main>
	);
}
