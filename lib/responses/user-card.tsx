export type GetUserCardsResponse = {
	data: {
		userCards: UserCard[];
	};
};

export type UserCard = {
	id: string;
	content: string;
	status: number;
	createdAt: string;
	updatedAt: string;
	dueReviewAt: string;
};
