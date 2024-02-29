import { atomWithStorage } from "jotai/utils";

type UserAtom = {
	id: string;
	username: string;
	email: string;
};

export const userAtom = atomWithStorage<UserAtom | null>("user", null);
