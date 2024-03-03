"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useAxios } from "@/lib/axios";
import { BE_URL, PageStatus } from "@/lib/constants";
import { formatDateString } from "@/lib/datetime";
import { UserCard } from "@/lib/responses/user-card";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function SingleCard({ userCard }: { userCard: UserCard }) {
	const queryClient = useQueryClient();

	const { axiosPost } = useAxios();
	const [isReviewOpen, setIsReviewOpen] = useState(false);
	const [pageStatus, setPageStatus] = useState<PageStatus>(PageStatus.None);

	const handleReview = async (statusChange: number) => {
		try {
			setPageStatus(PageStatus.Loading);

			await axiosPost(`${BE_URL}/user-card/${userCard.id}/review`, {
				statusChange: statusChange,
			});
			await queryClient.invalidateQueries({
				queryKey: ["cards-for-review"],
			});

			toast.success("Card successfully reviewed!");
		} catch {
		} finally {
			setPageStatus(PageStatus.None);
			setIsReviewOpen(false);
		}
	};

	return (
		<Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
			<DialogTrigger asChild>
				<div
					key={userCard.id}
					className="p-4 bg-blue-50 rounded-md shadow transition transform hover:scale-[1.02] hover:shadow-lg hover:cursor-pointer"
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
			</DialogTrigger>
			<DialogContent className="rounded-md">
				<DialogHeader>
					<DialogTitle className="text-xl text-blue-950 text-left">
						{userCard.content}
					</DialogTitle>
					<DialogDescription className="text-left text-blue-800">
						How well do you remember this card? Do your best on recalling it!
					</DialogDescription>
				</DialogHeader>
				<div className="grid mt-4 gap-4 grid-cols-1 lg:grid-cols-3">
					<button
						type="button"
						className="bg-red-100 text-red-800 text-sm px-4 py-2 rounded-md transition shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={pageStatus === PageStatus.Loading}
						onClick={() => handleReview(-1)}
					>
						I can&apos;t recall it at all!
					</button>
					<button
						type="button"
						className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-md transition shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={pageStatus === PageStatus.Loading}
						onClick={() => handleReview(0)}
					>
						I can recall an OK portion of it.
					</button>
					<button
						type="button"
						className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-md transition shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={pageStatus === PageStatus.Loading}
						onClick={() => handleReview(1)}
					>
						I can remember (almost) everything!
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
