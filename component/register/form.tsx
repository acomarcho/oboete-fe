"use client";

import { axiosPost } from "@/util/axios";
import { cn } from "@/util/cn";
import { BE_URL, PageStatus } from "@/util/constants";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const registerSchema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	password: Joi.string().required(),
});

type RegisterFormData = {
	username: string;
	email: string;
	password: string;
};

export default function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: joiResolver(registerSchema),
	});

	const [pageStatus, setPageStatus] = useState<PageStatus>(PageStatus.None);

	const onSubmit = handleSubmit(async (data) => {
		try {
			setPageStatus(PageStatus.Loading);

			await axiosPost(`${BE_URL}/user/register`, {
				username: data.username,
				email: data.email,
				password: data.password,
			});

			toast.success(
				"Successfully registered! You can now log in to your account.",
			);
		} finally {
			setPageStatus(PageStatus.None);
		}
	});

	return (
		<form className="flex flex-col gap-8 mt-8" onSubmit={onSubmit}>
			<div className="flex flex-col gap-2">
				<label htmlFor="username" className="text-xs font-bold text-blue-800">
					Username <span className="text-red-500">*</span>
				</label>
				<input
					className={cn("border text-sm py-2 px-4 border-blue-100 rounded-md", {
						"border-red-500": errors.username,
					})}
					type="text"
					placeholder="yamadaryo"
					{...register("username")}
				/>
				{errors.username && (
					<p className="text-red-500 text-xs">Username cannot be empty!</p>
				)}
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="text-xs font-bold text-blue-800">
					Email <span className="text-red-500">*</span>
				</label>
				<input
					className={cn("border text-sm py-2 px-4 border-blue-100 rounded-md", {
						"border-red-500": errors.email,
					})}
					type="email"
					placeholder="ryo@yamada.com"
					{...register("email")}
				/>
				{errors.email && (
					<p className="text-red-500 text-xs">Must be a valid email!</p>
				)}
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="password" className="text-xs font-bold text-blue-800">
					Password <span className="text-red-500">*</span>
				</label>
				<input
					className={cn("border text-sm py-2 px-4 border-blue-100 rounded-md", {
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
				Register {pageStatus === PageStatus.Loading && "..."}
			</button>
		</form>
	);
}
