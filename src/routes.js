import { USERS_CONTROLLER } from "./controllers/user.controller.js";

export const ROUTER = {
  routes: [
    {
      url: "/users",
      method: "GET",
      handler: USERS_CONTROLLER.getUsers,
    },
    {
      url: "/users/:id",
      method: "GET",
      handler: USERS_CONTROLLER.getUserById,
    },
    {
      url: "/users",
      method: "POST",
      handler: USERS_CONTROLLER.createUser,
    },
  ],

  getRouteData(request) {
    const { url, method } = request;
    if (!url || !method) return null;

    const normalizedUrl = url.split("?")[0].replace(/\/+$/, "");

    return this.routes.find((route) => {
      const routeParts = route.url.split("/").filter(Boolean);
      const urlParts = normalizedUrl.split("/").filter(Boolean);

      if (route.method !== method || routeParts.length !== urlParts.length) {
        return false;
      }

      return routeParts.every((part, index) => {
        return part.startsWith(":") || part === urlParts[index];
      });
    });
  },
};
