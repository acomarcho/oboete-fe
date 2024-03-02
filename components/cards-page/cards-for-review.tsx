"use client";
import { useAxios } from "@/lib/axios";
import { BE_URL } from "@/lib/constants";
import { GetUserCardsResponse } from "@/lib/responses/user-card";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { Skeleton } from "../ui/skeleton";

export default function CardsForReview() {
	const { axiosGet } = useAxios();

	const query = useQuery({
		queryKey: ["cards-for-review"],
		queryFn: async () => {
			const { data } = await axiosGet<GetUserCardsResponse>(
				`${BE_URL}/user-card/?dueReviewAt=${moment().toISOString()}`,
			);
			return data;
		},
	});

	if (query.isLoading) {
		return (
			<div className="flex flex-col mt-8">
				<Skeleton className="h-[100px] w-full rounded-md bg-blue-50 shadow" />;
				<Skeleton className="h-[100px] w-full rounded-md bg-blue-50 shadow" />;
			</div>
		);
	}

	const queryData = query.data;
	if (query.isError || !queryData) {
		return (
			<div className="flex gap-4 items-center mt-8 text-red-500 p-4 bg-red-50 rounded-md shadow">
				<svg
					className="flex-shrink-0"
					role="img"
					aria-label="Warning icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"
						strokeWidth="0"
						fill="currentColor"
					/>
				</svg>
				<p className="max-w-[40ch]">
					Whoops! Something went wrong when trying to get your cards data.
				</p>
			</div>
		);
	}

	if (queryData.userCards.length === 0) {
		return (
			<div className="flex gap-4 items-center mt-8 text-green-600 p-4 bg-green-50 rounded-md shadow">
				<svg
					className="flex-shrink-0"
					role="img"
					aria-label="Trophy icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
						strokeWidth="0"
						fill="currentColor"
					/>
				</svg>
				<p className="max-w-[40ch]">
					You have no cards for review! Go take a nice rest or add a new one if
					you haven&apos;t yet!
				</p>
			</div>
		);
	}

	return queryData.userCards.map((userCard) => {
		return (
			<div
				key={userCard.id}
				className="flex gap-4 items-center mt-8 p-4 bg-blue-50 rounded-md shadow"
			>
				<p className="max-w-[40ch]">{userCard.content}</p>
			</div>
		);
	});
}
