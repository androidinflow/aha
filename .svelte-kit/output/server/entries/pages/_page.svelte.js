import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let isLoggedIn;
  let { data } = $$props;
  const { posts } = data;
  console.log(posts);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  ({ user, isLoggedIn } = data);
  return `<h1 class="text-3xl font-bold underline text-red-400" data-svelte-h="svelte-1e4zkes">Hello world!</h1> ${isLoggedIn ? `<h2>Welcome ${escape(user?.username)}</h2> <h3>${escape(data.user.email)}</h3> <a href="/logout" data-svelte-h="svelte-w6rlc6"><button>Logout</button></a>` : `<a href="/login" data-svelte-h="svelte-9rzhph"><button>Login using Github</button></a>`} <h1 data-svelte-h="svelte-rmphmr">Posts</h1> ${posts.length > 0 ? `<ul>${each(posts, (post) => {
    return `<li><h2>Post ID: ${escape(post.id)}</h2> <p>${escape(post.text)}</p> ${post.image ? `<img width="400px" src="${"https://end.redruby.one/api/files/posts/" + escape(post.id, true) + "/" + escape(post.image, true)}"${add_attribute("alt", posts.Text, 0)}>` : ``} </li>`;
  })}</ul>` : `<p data-svelte-h="svelte-1mopmij">No posts available.</p>`}`;
});
export {
  Page as default
};
