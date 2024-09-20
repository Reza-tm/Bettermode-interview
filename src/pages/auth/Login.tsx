import { LoginSchema, LoginSchemaType } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Text } from "@ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: LoginSchemaType) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        navigate(0);
      } else {
        const json = await res.json();
        setError(json.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={"mt-24 flex flex-col items-center gap-4 lg:gap-8"}>
      <Text className={"mx-auto text-content-on-background"} size={"headingLg"}>
        Sign in to your account
      </Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          "w-full max-w-[448px] space-y-5 border border-line bg-surface px-4 py-5 shadow sm:rounded-lg"
        }
      >
        {error && (
          <div className="w-full rounded-md bg-red-400 p-3 text-content-on-background">
            {error}
          </div>
        )}
        <Input
          error={errors.email?.message}
          {...register("email")}
          label={"Email"}
        />
        <Input
          error={errors.password?.message}
          {...register("password")}
          type={"password"}
          label={"Password"}
        />
        <Button
          isLoading={loading}
          className={"bg-blue-600 text-white"}
          size={"full-width"}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};
