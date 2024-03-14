"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { TextInput } from "common/ui/inputs/TextInput";
import { AuthFormButton } from "common/ui/Buttons/AuthFormButton";
import { getDefaults } from "utils/zod";
import { useAuth } from "contexts/auth";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Email is required").default(""),
  password: z.string().min(1, "Password is required").default(""),
});

type Form = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isLoading },
  } = useForm<Form>({
    defaultValues: getDefaults(loginSchema),
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    setIsLoggedIn(true);
    router.push("/");
    reset();
  }

  return (
    <div className={"bg-white max-w-[426px] ml-16"}>
      <div className={"mb-10"}>
        <h4 className={"text-black text-center font-bold text-3xl"}>
          Login to your account
        </h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-8"}>
          <div className={"flex flex-col gap-4"}>
            <TextInput
              {...register("email")}
              label={"Email address*"}
              placeholder={"Enter email address"}
              helperText={errors.email?.message ?? ""}
            />
            <TextInput
              {...register("password")}
              label={"Password"}
              placeholder={"Enter password"}
              helperText={errors.password?.message ?? ""}
            />
          </div>
          <AuthFormButton>Login</AuthFormButton>
        </div>
      </form>
    </div>
  );
}
