"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLogin } from "@/features/auth/api/use-login";
import { AuthForm } from "@/features/auth/componenets/auth-form";
import { authSchema } from "@/features/auth/schemas";
import { z } from "zod";

const SigninPage = () => {
  const { mutate, isPending } = useLogin();

  const onSubmit = (values: z.infer<typeof authSchema>) => {
    mutate({ json: values });
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>Sign in to Skill Craft account</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm
          onSubmitAction={onSubmit}
          isPending={isPending}
          variant="sign-in"
        />
      </CardContent>
    </Card>
  );
};

export default SigninPage;
