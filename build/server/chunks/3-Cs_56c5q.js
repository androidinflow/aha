const load = async ({ locals }) => {
  try {
    const posts = await locals.pb.collection("posts").getFullList({
      sort: "-created"
      // Sort by creation date, descending
    });
    return {
      posts: posts.map((post) => ({
        id: post.id,
        text: post.text,
        image: post.image
      }))
    };
  } catch (err) {
    console.error("Error fetching posts:", err);
    return {
      posts: []
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BkUsOd3u.js')).default;
const server_id = "src/routes/dashboard/kos/+page.server.js";
const imports = ["_app/immutable/nodes/3.Bh7M2vWe.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.CLLxW2Xa.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-Cs_56c5q.js.map
