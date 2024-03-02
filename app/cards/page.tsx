import AddCardButtonWithDialog from "@/components/cards-page/add-card-button-with-dialog";

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
				<AddCardButtonWithDialog />
			</div>
		</div>
	);
}
