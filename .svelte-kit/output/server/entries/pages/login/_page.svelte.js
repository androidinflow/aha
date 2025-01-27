import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `// src/routes/login/+page.svelte

<button data-svelte-h="svelte-1iojyki">Login with github</button>`;
});
export {
  Page as default
};
