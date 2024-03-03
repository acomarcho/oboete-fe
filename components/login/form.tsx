"use client";

import { userAtom } from "@/atoms/user";
import { useAxios } from "@/lib/axios";
import { BE_URL, PageStatus } from "@/lib/constants";
import { LoginResponse } from "@/lib/responses/login";
import { cn } from "@/lib/utils";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "../ui/input";

const loginSchema = Joi.object({
	usernameOrEmail: Joi.string().required(),
	password: Joi.string().required(),
});

type LoginFormData = {
	usernameOrEmail: string;
	password: string;
};

export default function LoginForm() {
	const { axiosPost } = useAxios();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: joiResolver(loginSchema),
	});

	const [pageStatus, setPageStatus] = useState<PageStatus>(PageStatus.None);
	const setUser = useSetAtom(userAtom);
	const router = useRouter();

	const onSubmit = handleSubmit(async (data) => {
		if (pageStatus === PageStatus.Loading) {
			return;
		}

		try {
			setPageStatus(PageStatus.Loading);

			const { data: loginData } = await axiosPost<LoginResponse>(
				`${BE_URL}/user/login`,
				{
					usernameOrEmail: data.usernameOrEmail,
					password: data.password,
				},
			);

			setUser({
				id: loginData.user.id,
				username: loginData.user.username,
				email: loginData.user.email,
			});

			toast.success("Successfully logged in!");

			router.push("/cards");
		} catch {
		} finally {
			setPageStatus(PageStatus.None);
		}
	});

	return (
		<form className="flex flex-col gap-8 mt-8" onSubmit={onSubmit}>
			<div className="flex flex-col gap-2">
				<label htmlFor="username" className="text-xs font-bold text-blue-800">
					Username or email <span className="text-red-500">*</span>
				</label>
				<Input
					className={cn({
						"border-red-500": errors.usernameOrEmail,
					})}
					type="text"
					placeholder="yamadaryo"
					{...register("usernameOrEmail")}
				/>
				{errors.usernameOrEmail && (
					<p className="text-red-500 text-xs">
						Username or email cannot be empty!
					</p>
				)}
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="password" className="text-xs font-bold text-blue-800">
					Password <span className="text-red-500">*</span>
				</label>
				<Input
					className={cn({
						"border-red-500": errors.password,
					})}
					type="password"
					placeholder="bocchitherock"
					{...register("password")}
				/>
				{errors.password && (
					<p className="text-red-500 text-xs">Password cannot be empty!</p>
				)}
			</div>
			<button
				type="submit"
				className="mt-4 bg-blue-900 text-blue-50 px-4 py-2 font-bold rounded-md transition-all hover:bg-blue-600 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
				disabled={pageStatus === PageStatus.Loading}
			>
				Login {pageStatus === PageStatus.Loading && "..."}
			</button>
		</form>
	);
}
