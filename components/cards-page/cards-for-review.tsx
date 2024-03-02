"use client";
import { useAxios } from "@/lib/axios";
import { BE_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export default function CardsForReview() {
	const { axiosGet } = useAxios();

	const query = useQuery({
		queryKey: ["cards-for-review"],
		queryFn: async () => {
			return await axiosGet(`${BE_URL}/user-card/`);
		},
	});

	return <h1>Hello, world!</h1>;
}
