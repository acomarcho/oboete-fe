export type LoginResponse = {
	data: {
		tokens: {
			accessToken: string;
			refreshToken: string;
		};
		user: {
			id: string;
			username: string;
			email: string;
		};
	};
};
