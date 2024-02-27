"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { cn } from "@/util/cn";
import Joi from "joi";

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

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="bg-hero-background bg-cover h-screen bg-bottom grid place-items-center p-8">
      <div className="bg-white w-full max-w-[400px] p-8 rounded-md drop-shadow">
        <h1 className="text-2xl font-bold">Register an account</h1>
        <form className="flex flex-col gap-8 mt-8" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-xs font-bold text-blue-800"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              className={cn(
                "border text-sm py-2 px-4 border-blue-100 rounded-md",
                {
                  "border-red-500": errors.username,
                }
              )}
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
              className={cn(
                "border text-sm py-2 px-4 border-blue-100 rounded-md",
                {
                  "border-red-500": errors.email,
                }
              )}
              type="email"
              placeholder="ryo@yamada.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Must be a valid email!</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs font-bold text-blue-800"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className={cn(
                "border text-sm py-2 px-4 border-blue-100 rounded-md",
                {
                  "border-red-500": errors.password,
                }
              )}
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
