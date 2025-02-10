"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { authSchema } from "../schemas";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import OauthGoogleButton from "./oauth-google-btn";

type AuthFormProps = {
  variant: "sign-up" | "sign-in";
  onSubmitAction: (values: z.infer<typeof authSchema>) => void;
  isPending: boolean;
};

export const AuthForm = ({
  variant,
  onSubmitAction,
  isPending,
}: AuthFormProps) => {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="grid gap-6">
      <OauthGoogleButton />
      <div className="flex gap-x-2 items-center justify-center">
        <span className="flex-1 border border-secondary" />
        <p className="whitespace-nowrap px-2">Or continue with</p>
        <span className="flex-1 border border-secondary" />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitAction)}
          className="grid gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type your email"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel htmlFor="password">Password</FormLabel>
                  {variant === "sign-in" && (
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <FormControl>
                  <PasswordInput {...field} placeholder="Type your password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} className="w-full">
            Sign Up
          </Button>
        </form>
        <div className="text-center text-sm">
          {variant === "sign-in"
            ? "Don't have an account?"
            : "Already have an account"}{" "}
          <Link
            href={variant === "sign-in" ? "/sign-up" : "/sign-in"}
            className="underline underline-offset-4"
          >
            {variant === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </Form>
    </div>
  );
};
