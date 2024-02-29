/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { App } from "../../index";
import { getAccessTokenFromCode, getOauthURL } from "../../utils";

export default (app: App) => {
  app.get("/", () => ({ status: "ok" }));

  app.get("/fb", ({ set }) => {
    const oauthURL = getOauthURL();
    console.log(oauthURL);
    set.redirect = oauthURL;
    return { status: "OK" };
  });

  app.get("/callback", async ({ query }) => {
    const response: any = await getAccessTokenFromCode({ code: query.code });
    const respJson: any = await response?.json();
    return { access_token: respJson?.access_token };
  });
  return app;
};
