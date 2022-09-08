export const useAuth = (route, context) => {
  console.log(route, context);
  return context.hasOwnProperty(route);
};
