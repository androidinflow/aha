const load = async ({ locals, url }) => {
  const authMethods = await locals.pb?.collection("users").listAuthMethods();
  if (!authMethods) {
    return {
      authProviderRedirect: "",
      authProviderState: ""
    };
  }
  const redirectURL = `${url.origin}/auth/callback`;
  const githubAuthProvider = authMethods.authProviders[0];
  const authProviderRedirect = `${githubAuthProvider.authUrl}${redirectURL}`;
  const state = githubAuthProvider.state;
  return {
    authProviderRedirect,
    authProviderState: state
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bm5f_yRW.js')).default;
const server_id = "src/routes/login/+page.server.js";
const imports = ["_app/immutable/nodes/4.OMGlK3qe.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.CLLxW2Xa.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-BDMoIjxx.js.map
