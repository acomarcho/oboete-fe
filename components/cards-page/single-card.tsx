import { formatDateString } from "@/lib/datetime";
import { UserCard } from "@/lib/responses/user-card";

export default function SingleCard({ userCard }: { userCard: UserCard }) {
	return (
		<div
			key={userCard.id}
			className="p-4 bg-blue-50 rounded-md shadow transition transform hover:scale-[1.02] hover:shadow-lg"
		>
			<p className="max-w-[40ch] text-blue-900 font-bold text-xl">
				{userCard.content}
			</p>
			<div className="flex flex-col gap-2 mt-8">
				<p className="text-xs uppercase font-bold tracking-widest text-blue-600">
					Created at
				</p>
				<p className="text-blue-500 text-sm">
					{formatDateString(userCard.createdAt)}
				</p>
				<p className="text-xs uppercase font-bold tracking-widest text-blue-600">
					Due for review since
				</p>
				<p className="text-blue-500 text-sm">
					{formatDateString(userCard.dueReviewAt)}
				</p>
			</div>
		</div>
	);
}
