"use client";

import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export async function axiosPost<T>(url: string, data?: unknown): Promise<T> {
	try {
		const response = await axios.post<T>(url, data, { withCredentials: true });
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			toast.error(error.response?.data?.error || "Internal server error");
			throw error;
		}

		toast.error("An error occured while making request ...");
		throw error;
	}
}
