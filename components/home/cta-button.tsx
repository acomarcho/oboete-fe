"use client";

import { userAtom } from "@/atoms/user";
import { useAtomValue } from "jotai";
import Link from "next/link";

export default function CtaButton({ children }: { children: React.ReactNode }) {
	const user = useAtomValue(userAtom);

	return (
		<Link
			href={user === null ? "/register" : "/cards"}
			className="inline-block mt-12 bg-blue-200 text-blue-950 px-4 py-2 font-bold rounded-md transition-all hover:bg-blue-300 hover:cursor-pointer"
		>
			{children}
		</Link>
	);
}
