import { r as redirect } from './index-DyoisQP2.js';

const GET = ({ locals }) => {
  locals.pb?.authStore.clear();
  locals.user = void 0;
  throw redirect(303, "/");
};

export { GET };
//# sourceMappingURL=_server-DPQN4Ee1.js.map
