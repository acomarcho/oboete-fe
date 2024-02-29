import LoginForm from "@/components/login/form";

export default function RegisterPage() {
	return (
		<div className="bg-hero-background bg-cover min-h-screen bg-bottom grid place-items-center px-8 pb-8 pt-24">
			<div className="bg-white w-full max-w-[400px] p-8 rounded-md drop-shadow">
				<h1 className="text-2xl font-bold">Authenticate yourself</h1>
				<LoginForm />
				<p className="mt-8 text-sm">
					{"Don't have an account yet? "}
					<a href="/register" className="text-blue-600">
						Register!
					</a>
				</p>
			</div>
		</div>
	);
}
