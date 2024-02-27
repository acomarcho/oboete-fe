export default function RegisterPage() {
  return (
    <div className="bg-hero-background bg-cover h-screen bg-bottom grid place-items-center p-8">
      <div className="bg-white w-full max-w-[400px] p-8 rounded-md drop-shadow">
        <h1 className="text-2xl font-bold">Register an account</h1>
        <form className="flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-xs font-bold text-blue-800"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              className="border text-sm py-2 px-4 border-blue-100 rounded-md"
              type="text"
              name="username"
              placeholder="yamadaryo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-blue-800">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="border text-sm py-2 px-4 border-blue-100 rounded-md"
              type="email"
              name="email"
              placeholder="ryo@yamada.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs font-bold text-blue-800"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className="border text-sm py-2 px-4 border-blue-100 rounded-md"
              type="password"
              name="password"
              placeholder="bocchitherock"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-900 text-blue-50 px-4 py-2 font-bold rounded-md transition-all hover:bg-blue-600 hover:cursor-pointer"
          >
            Register
          </button>
        </form>
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
