"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const registerSchema = z.object({
  fullName: z
    .string()
    .min(1, "Your name must be at least 1 character")
    .default(""),
  email: z.string().email().default(""),
  password: z
    .string()
    .min(6, "Your password must be at least 6 character")
    .default(""),
});

type Form = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isLoading },
  } = useForm<Form>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: Form) {
    console.log(data);
    reset();
  }

  return (
    <div>
      <h4>Register Individual Account!</h4>
      <p>For the purpose of industry regulation, your details are required.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span>Your Fullname*</span>
            <input type="text" {...register("fullName")} />
          </label>
        </div>
        <div>
          <label>
            <span>Email address*</span>
            <input type="email" {...register("email")} />
          </label>
        </div>

        <div>
          <label>
            <span>Create password*</span>
            <input type="password" {...register("password")} />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>I agree to terms & conditions</span>
          </label>
        </div>
        <button type="submit">Register Account</button>
      </form>
    </div>
  );
}
