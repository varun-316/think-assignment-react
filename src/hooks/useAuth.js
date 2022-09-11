export const useAuth = (route, context) => {
  return context.hasOwnProperty(route);
};
