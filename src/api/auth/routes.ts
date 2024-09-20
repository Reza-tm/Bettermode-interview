import cookie from "cookie";
import { add } from "date-fns";
import { Request, Response, Router } from "express";
import { createSSRApolloClient } from "@/graphql/graphql.server.ts";
import { NETWORK_LOGIN } from "@/graphql/member/mutations.ts";

export const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await fetch(
      `${import.meta.env.VITE_APP_URL}/api/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          authType: "user-pass",
          usernameOrEmail: email,
          password: password,
        }),
      },
    );

    const [accessTokenCookie] = result.headers.getSetCookie();
    const parsedCookies = cookie.parse(accessTokenCookie);
    const cAccessToken = parsedCookies["c_access_token"];

    const client = createSSRApolloClient(cAccessToken);
    const { data } = await client.mutate({
      mutation: NETWORK_LOGIN,
      variables: {
        email,
        pass: password,
      },
    });

    const expireDate = add(new Date(), {
      days: 7,
    });

    return res
      .cookie("c_access_token", data?.loginNetwork.accessToken, {
        httpOnly: true,
        secure: true,
        expires: expireDate,
      })
      .end();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error, message: error.message });
    }
    return res.status(500).json({ error, message: "unknown error" });
  }
});

authRouter.get("/logout", (_req: Request, res: Response) => {
  try {
    return res
      .cookie("c_access_token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
      })
      .status(200)
      .redirect("/auth/login");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error, message: error.message });
    }
    return res.status(500).json({ error, message: "unknown error" });
  }
});
