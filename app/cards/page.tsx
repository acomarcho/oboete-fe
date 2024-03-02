import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function CardsPage() {
	return (
		<div className="px-8 pb-8 pt-24 max-w-wrapper mx-auto">
			<div className="p-8 bg-blue-50 rounded-md shadow-md">
				<h1 className="text-sm font-extrabold uppercase tracking-widest text-blue-950 ">
					Add a card
				</h1>
				<p className="text-blue-800 mt-1">
					Have you learned anything worth remembering today?
				</p>
				<Dialog>
					<DialogTrigger asChild>
						<button
							className="bg-blue-800 text-blue-100 px-4 py-2 rounded-md mt-4 transition hover:bg-blue-900 hover:shadow"
							type="button"
						>
							Yes, I have!
						</button>
					</DialogTrigger>
					<DialogContent className="rounded-md">
						<DialogHeader>
							<DialogTitle className="text-xl text-blue-950 text-left">
								Add a card!
							</DialogTitle>
							<DialogDescription>
								<div className="mt-6">
									<form className="text-left">
										<div className="flex flex-col gap-2">
											<label htmlFor="content" className="text-gray-950">
												What do you want to recall later?{" "}
												<span className="text-red-500">*</span>
											</label>
											<Input
												type="text"
												placeholder="Adapter and facade pattern"
											/>
											<p className="text-gray-500 text-xs">
												Keep it simple and short!
											</p>
										</div>
										<button
											className="bg-blue-800 text-blue-100 px-4 py-2 rounded-md mt-8 transition hover:bg-blue-900 hover:shadow"
											type="submit"
										>
											Submit!
										</button>
									</form>
								</div>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
