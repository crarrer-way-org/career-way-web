"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRegister } from "@/features/auth/api/use-register";
import { AuthForm } from "@/features/auth/componenets/auth-form";
import { authSchema } from "@/features/auth/schemas";
import Link from "next/link";
import { z } from "zod";

const SignupPage = () => {
  const { mutate, isPending } = useRegister();

  const onSubmit = (values: z.infer<typeof authSchema>) => {
    mutate({ json: values });
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Access your account</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthForm
            onSubmitAction={onSubmit}
            isPending={isPending}
            variant="sign-up"
          />
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
};

export default SignupPage;
