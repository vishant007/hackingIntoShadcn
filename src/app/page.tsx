import Nav from '@/components/Nav';
import { Button } from '@/components/ui/button';
import CalendarSelection from '@/components/CalendarSelection';
import { TypographyH1 } from '@/components/heading';

export default function Home() {
	return (
		<main className='p-10'>
			<Nav />
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 m-7 '>
				<div className='flex flex-col gap-8 justify-center items-center p-5 '>
					<TypographyH1 />
					<div className='flex gap-5 justify-center items-center'>
						<Button>Explore Shadcn</Button>
					</div>
				</div>

				<div className='p-5 flex justify-center items-center'>
					<CalendarSelection />
				</div>
			</div>
			{/*<section className='py-24 flex flex-col gap-8 items-center justify-center'>
				<h1 className='text-4xl font-bold'>Shadcn Is W</h1>
				<p className='text-2xl text-muted-foreground'>
					Started hacking shadcn!!
				</p>
				<div className='flex gap-6 items-center justify-center'>
					<Button>Click me</Button>
				</div>
			</section> */}
		</main>
	);
}
