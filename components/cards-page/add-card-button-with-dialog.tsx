"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form";

const addCardSchema = Joi.object({
	content: Joi.string().required(),
});

type AddCardFormData = {
	content: string;
};

export default function AddCardButtonWithDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<AddCardFormData>({
		resolver: joiResolver(addCardSchema),
	});

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	const handleOpenChange = (open: boolean) => {
		setIsDialogOpen(open);
		reset();
	};

	return (
		<Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<button
					className="bg-blue-800 text-blue-100 px-4 py-2 rounded-md mt-4 transition hover:bg-blue-900 hover:shadow"
					type="button"
				>
					Yes, I have!
				</button>
			</DialogTrigger>
			<DialogContent className="rounded-md">
				<DialogHeader>
					<DialogTitle className="text-xl text-blue-950 text-left">
						Add a card!
					</DialogTitle>
					<DialogDescription asChild>
						<div className="mt-6">
							<form className="text-left" onSubmit={onSubmit}>
								<div className="flex flex-col gap-2">
									<label htmlFor="content" className="text-gray-950">
										What do you want to recall later?{" "}
										<span className="text-red-500">*</span>
									</label>
									<Input
										className={cn("text-blue-900", {
											"border-red-500": errors.content,
										})}
										type="text"
										placeholder="Adapter and facade pattern"
										{...register("content")}
									/>
									{errors.content && (
										<p className="text-red-500 text-xs">
											Username or email cannot be empty!
										</p>
									)}
									<p className="text-gray-500 text-xs">
										Keep it simple and short!
									</p>
								</div>
								<button
									className="bg-blue-800 text-blue-100 px-4 py-2 rounded-md mt-8 transition hover:bg-blue-900 hover:shadow"
									type="submit"
								>
									Submit!
								</button>
							</form>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
