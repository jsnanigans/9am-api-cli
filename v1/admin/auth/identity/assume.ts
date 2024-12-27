import { NAP_DEV_BASE_URL } from "../../../../base.ts";

const url = NAP_DEV_BASE_URL;
url.pathname = "/v1/admin/auth/identity/assume";

console.log(url);
const body = {
  userId: "63f64133-61f8-4483-977d-b34e6ca9f367",
  role: "USER",
  reasoning: "testing api",
};

const args = Deno.args;

class Rq {
  url: URL;
  method: string;
  headers: Headers = new Headers({
    "Content-Type": "application/json",
  });
  body: string;
  loginOptions?: { role: string };

  constructor(
    url: URL,
    method: string,
    body: string,
    login?: { role: string },
  ) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.loginOptions = login;
  }

  login = async (): Promise<void> => {
    const loginUrl = new URL(NAP_DEV_BASE_URL);
    loginUrl.pathname = "/v1/users/login";
    const data = {
      email: Deno.env.get("API_AUTH_EMAIL"), //"brendan@9am.health",
      password: Deno.env.get("API_AUTH_PASSWORD"), //"password",
      sessionName: "Test",
      mfaToken: args[0],
      role: "DEVELOPER",
    };
    if (!data.email || !data.password || !data.mfaToken) {
      throw new Error("missing credentials");
    }
    const req = new Rq(loginUrl, "POST", JSON.stringify(data));
    const res = await fetch(req.url, {
      method: req.method,
      headers: req.headers,
      body: req.body,
    });
    const response = await res.json();
    this.headers.set("Authorization", `Bearer ${response.data.accessToken}`);
  };
}

const fn = async () => {
  try {
    const r = new Rq(url, "POST", JSON.stringify(body), { role: "DEVELOPER" });
    await r.login();
    const res = await fetch(r.url, {
      method: r.method,
      headers: r.headers,
      body: r.body,
    });
    const response = await res.json();
    console.log(`copy to console:`);
    console.log(
      `window.dispatchEvent(new CustomEvent('SET-CREDENTIALS', {detail: {accessToken: '${response.data.accessToken}', refreshToken: '${response.data.refreshToken}'}}))`,
    );
  } catch (error) {
    console.error(error);
  }
};

fn();
