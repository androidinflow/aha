const load = async ({ locals }) => {
  const user = locals.user;
  if (user) {
    return { user, isLoggedIn: true };
  }
  return {
    user: void 0,
    isLoggedIn: false
  };
};
export {
  load
};
