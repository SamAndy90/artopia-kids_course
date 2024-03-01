"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { TextInput } from "common/ui/inputs/TextInput";
import { AuthFormButton } from "common/ui/Buttons/AuthFormButton";
import { getDefaults } from "utils/zod";

const registerSchema = z.object({
  fullname: z
    .string()
    .min(1, "Your name must be at least 1 character")
    .default(""),
  email: z.string().email().default(""),
  password: z
    .string()
    .min(6, "Your password must be at least 6 character")
    .default(""),
  agreement: z.boolean().default(true),
});

type Form = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: getDefaults(registerSchema),
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: Form) {
    console.log(data);
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    reset();
  }

  return (
    <div className={"bg-white max-w-[426px] ml-16"}>
      <div className={"mb-10"}>
        <h4 className={"text-black text-center font-bold text-3xl"}>
          Register Individual Account!
        </h4>
        <p className={"text-[#8692A6] text-lg font-medium"}>
          For the purpose of industry regulation, your details are required.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-6"}>
          <TextInput
            label={"Your Fullname*"}
            {...register("fullname")}
            placeholder={"Enter your full name"}
            helperText={errors.fullname?.message ?? ""}
          />
          <TextInput
            type={"email"}
            {...register("email")}
            label={"Email address*"}
            placeholder={"Enter email address"}
            helperText={errors.email?.message ?? ""}
          />
          <TextInput
            type={"password"}
            {...register("password")}
            label={"Create password*"}
            placeholder={"Enter new password"}
            helperText={errors.password?.message ?? ""}
          />
          <div>
            <label className={"text-black"}>
              <input type="checkbox" {...register("agreement")} />
              <span>I agree to terms & conditions</span>
            </label>
          </div>
        </div>
        <AuthFormButton>Register Account</AuthFormButton>
      </form>
    </div>
  );
}
