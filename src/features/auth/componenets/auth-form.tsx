"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signupSchema } from "../schemas";

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
import OauthGoogleButton from "./oauth-google-btn";

type AuthFormProps = {
  variant: "sign-up" | "sign-in";
};

export const AuthForm = ({ variant }: AuthFormProps) => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="grid gap-6">
        <OauthGoogleButton />
        <div className="flex gap-x-2 items-center justify-center">
          <span className="flex-1 h-1 bg-secondary" />
          <p className="whitespace-nowrap px-2">Or continue with</p>
          <span className="flex-1 h-1 bg-secondary" />
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
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
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <div className="text-center text-sm">
          {variant === "sign-in"
            ? "Don't have an account?"
            : "Already have an account"}{" "}
          <a
            href={variant === "sign-in" ? "/sign-up" : "/sign-in"}
            className="underline underline-offset-4"
          >
            {variant === "sign-in" ? "Sign up" : "Sign in"}
          </a>
        </div>
      </div>
    </Form>
  );
};
