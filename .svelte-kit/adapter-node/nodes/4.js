import * as server from '../entries/pages/login/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/4.OMGlK3qe.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.CLLxW2Xa.js"];
export const stylesheets = [];
export const fonts = [];
