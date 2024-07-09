const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ocVIx-kI.js","app":"_app/immutable/entry/app.DKNg0HAJ.js","imports":["_app/immutable/entry/start.ocVIx-kI.js","_app/immutable/chunks/entry.XtLfeXvY.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/entry/app.DKNg0HAJ.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.CLLxW2Xa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BWFcCjR9.js')),
			__memo(() => import('./chunks/1-XJYUNT8l.js')),
			__memo(() => import('./chunks/2-DXj2Vxvi.js')),
			__memo(() => import('./chunks/3-Cs_56c5q.js')),
			__memo(() => import('./chunks/4-BDMoIjxx.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D9M8dbz5.js'))
			},
			{
				id: "/dashboard/kos",
				pattern: /^\/dashboard\/kos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DPQN4Ee1.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
