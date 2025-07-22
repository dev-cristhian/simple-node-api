import { USERS_CONTROLLER } from "./controllers/user.controller.js";

export const ROUTER = {
  routes: [
    {
      url: "/users",
      method: "GET",
      handler: USERS_CONTROLLER.getUser,
    },
    {
      url: "/users",
      method: "POST",
      handler: USERS_CONTROLLER.createUser,
    },
  ],

  getRouteData: function (url, method) {
    return this.routes.find(
      (route) => route.url === url && route.method === method
    );
  },
};
