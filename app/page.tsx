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
				<h1 className="text-4xl font-bold text-blue-950 text-center">
					Introducing Oboete
				</h1>
				<p className="mt-4 uppercase tracking-widest text-sm text-blue-500 text-center">
					Remember concepts, effortlessly
				</p>
				<div className="mt-8 flex flex-col gap-8 lg:flex-row">
					<div className="bg-blue-100 p-6 shadow rounded-md space-y-4 text-center">
						<h2 className="font-bold text-xl text-blue-950 uppercase tracking-wider">
							Spaced repetition
						</h2>
						<div className="w-16 mx-auto text-blue-950">
							<svg
								role="img"
								aria-label="Hourglass icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="1s5"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M6.5 7h11" />
								<path d="M6.5 17h11" />
								<path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
								<path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
							</svg>
						</div>
						<p className="text-blue-900">
							Oboete schedules reviews based on forgetting curves, optimizing
							memory with spaced intervals.
						</p>
					</div>
					<div className="bg-blue-100 p-6 shadow rounded-md space-y-4 text-center">
						<h2 className="font-bold text-xl text-blue-950 uppercase tracking-wider">
							Focus on free recall
						</h2>
						<div className="w-16 mx-auto text-blue-950">
							<svg
								role="img"
								aria-label="Brain icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
								<path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
								<path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
								<path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
								<path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
								<path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
							</svg>
						</div>
						<p className="text-blue-900">
							Unlike flashcards, Oboete emphasizes actively recalling
							information for deeper understanding and retention.
						</p>
					</div>
					<div className="bg-blue-100 p-6 shadow rounded-md space-y-4 text-center">
						<h2 className="font-bold text-xl text-blue-950 uppercase tracking-wider">
							Minimal effort
						</h2>
						<div className="w-16 mx-auto text-blue-950">
							<svg
								role="img"
								aria-label="Feather icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4" />
								<path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4" />
							</svg>
						</div>
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
