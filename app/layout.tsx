import Navbar from "@/components/common/navbar";
import JotaiProvider from "@/components/jotai/provider";
import ReactQueryProvider from "@/components/tanstack-query/provider";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Oboete",
	description:
		"Oboete: Always remember, with the power of simplicity and spaced repetition.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={plus_jakarta_sans.className}>
				<ReactQueryProvider>
					<JotaiProvider>
						<>
							<Toaster richColors />
							<Navbar />
							{children}
						</>
					</JotaiProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
