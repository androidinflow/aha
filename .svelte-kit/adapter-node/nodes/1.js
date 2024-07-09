

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cno-Tc8q.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.CLLxW2Xa.js","_app/immutable/chunks/entry.XtLfeXvY.js"];
export const stylesheets = [];
export const fonts = [];
