import RegisterForm from "@/components/register/form";

export default function RegisterPage() {
	return (
		<div className="bg-hero-background bg-cover h-screen bg-bottom grid place-items-center p-8">
			<div className="bg-white w-full max-w-[400px] p-8 rounded-md drop-shadow">
				<h1 className="text-2xl font-bold">Register an account</h1>
				<RegisterForm />
				<p className="mt-8 text-sm">
					Already have an account?{" "}
					<a href="/login" className="text-blue-600">
						Log in!
					</a>
				</p>
			</div>
		</div>
	);
}
