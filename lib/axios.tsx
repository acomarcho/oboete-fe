"use client";

import { userAtom } from "@/atoms/user";
import axios, { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { BE_URL } from "./constants";

const NO_RETRY_HEADER = "x-no-retry";

const privateAxiosClient = axios.create({ withCredentials: true });
privateAxiosClient.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.config.headers?.[NO_RETRY_HEADER]) {
			return Promise.reject(error);
		}

		if (error?.response?.status === StatusCodes.UNAUTHORIZED) {
			error.config.headers ||= {};
			error.config.headers[NO_RETRY_HEADER] = "true";
			await getRefreshToken();

			return privateAxiosClient(error.config);
		}
		return Promise.reject(error);
	},
);

async function getRefreshToken(): Promise<string> {
	const cleanAxiosClient = axios.create({ withCredentials: true });

	const { data: responseData } = await cleanAxiosClient.post<{
		data: { accessToken: string };
	}>(`${BE_URL}/user/refresh`, null, { withCredentials: true });

	return responseData.data.accessToken;
}

export const useAxios = () => {
	const router = useRouter();
	const setUser = useSetAtom(userAtom);

	async function axiosPost<T>(url: string, data?: unknown) {
		try {
			const response = await privateAxiosClient.post<T>(url, data, {
				withCredentials: true,
			});
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data?.error || "Internal server error");

				if (error?.response?.status === StatusCodes.UNAUTHORIZED) {
					setUser(null);
					router.replace("/");
				}

				throw error;
			}

			toast.error("An error occured while making request ...");
			throw error;
		}
	}

	return { axiosPost };
};
