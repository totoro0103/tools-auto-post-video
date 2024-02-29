const META_APP_ID = "3348620372043295";
const META_APP_SECRET = "44e2553d348ed9ae469248fd2b6195cb";
const DOMAIN = "http://localhost:3000/oauth/callback";

export const getRedirectURI = () => `redirect_uri=${DOMAIN}`;

export const getOauthURL = () => {
  const redirectUri = getRedirectURI();
  const oauthUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${META_APP_ID}&${redirectUri}&response_type=code&auth_type=reauthorize&scope=${encodeURIComponent(
    "pages_show_list,pages_manage_metadata,pages_messaging",
  )}`;
  return oauthUrl;
};

export const getAccessTokenFromCode = async ({ code }: any) => {
  const redirectUri = getRedirectURI();
  return fetch(
    `https://graph.facebook.com/v16.0/oauth/access_token?client_id=${META_APP_ID}&client_secret=${META_APP_SECRET}&code=${code}&${redirectUri}`,
  );
};
