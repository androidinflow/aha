import * as server from '../entries/pages/dashboard/kos/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/kos/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/kos/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Bh7M2vWe.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.CLLxW2Xa.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
