export default function Home() {
	return (
		<>
			<div className="bg-hero-background bg-cover bg-bottom">
				<div className="max-w-wrapper mx-auto">
					<div className="px-8 py-16">
						<h1 className="text-4xl font-bold text-white">覚えて (Oboete)</h1>
						<p className="text-base text-blue-100 mt-4 max-w-[30ch]">
							Always remember, with the power of simplicity and spaced
							repetition.
						</p>
						<a
							href="/register"
							className="inline-block mt-12 bg-blue-200 text-blue-950 px-4 py-2 font-bold rounded-md transition-all hover:bg-blue-300 hover:cursor-pointer"
						>
							Start remembering, now!
						</a>
					</div>
				</div>
			</div>
			<div className="max-w-wrapper mx-auto px-8 py-16">
				<h1 className="text-4xl font-bold text-blue-950">Introducing Oboete</h1>
				<p className="mt-4 uppercase tracking-widest text-sm text-blue-500">
					Remember anything, effortlessly.
				</p>
				<div className="mt-8 flex flex-col gap-8 lg:flex-row">
					<div className="bg-blue-100 p-6 shadow rounded-md space-y-4">
						<h2 className="font-bold text-xl text-blue-950 uppercase tracking-widest">
							Spaced repetition
						</h2>
						<p className="text-blue-900">
							Oboete schedules reviews based on forgetting curves, optimizing
							memory with spaced intervals.
						</p>
					</div>
					<div className="bg-blue-100 p-6 shadow rounded-md space-y-4">
						<h2 className="font-bold text-xl text-blue-950 uppercase tracking-widest">
							Focus on free recall
						</h2>
						<p className="text-blue-900">
							Unlike flashcards, Oboete emphasizes actively recalling
							information for deeper understanding and retention.
						</p>
					</div>
					<div className="bg-blue-100 p-6 shadow rounded-md space-y-4">
						<h2 className="font-bold text-xl text-blue-950 uppercase tracking-widest">
							Minimal effort
						</h2>
						<p className="text-blue-900">
							Simply input topics and Oboete takes care of the rest, reminding
							you to recall at optimal times for effortless learning.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
