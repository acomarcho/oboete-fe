"use client";

import { userAtom } from "@/atoms/user";
import { useAtom } from "jotai";
import Link from "next/link";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
	const [user, setUser] = useAtom(userAtom);

	return (
		<div className="fixed top-0 left-0 w-screen bg-blue-950 z-50">
			<div className="max-w-wrapper mx-auto px-8 h-16">
				<div className="flex justify-between items-center h-full">
					<Link
						href="/"
						className="uppercase tracking-widest text-blue-100 font-bold text-xl"
					>
						Oboete
					</Link>
					{user !== null && (
						<DropdownMenu>
							<DropdownMenuTrigger
								type="button"
								className="border border-blue-100 inline-block text-blue-100 px-4 py-2 rounded-md transition-all hover:cursor-pointer flex items-center gap-2"
							>
								<svg
									role="img"
									aria-label="User icon"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
									<path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
									<path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
								</svg>
								<span className="text-sm">{user.username}</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<button
										type="button"
										className="w-full flex justify-between items-center text-blue-950"
									>
										<span>Log out</span>
										<svg
											role="img"
											aria-label="Log out icon"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
											<path d="M9 12h12l-3 -3" />
											<path d="M18 15l3 -3" />
										</svg>
									</button>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>
		</div>
	);
}
