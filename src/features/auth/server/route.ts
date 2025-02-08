import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { ID } from "node-appwrite";

import { createAdminClient } from "@/lib/appwrite";

import { AUTH_COOKIE } from "../constants";
import { authSchema } from "../schemas";

const app = new Hono().post(
  "/register",
  zValidator("json", authSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    await account.create(ID.unique(), email, password);

    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ success: true });
  }
);
export default app;
