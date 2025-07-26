import { USERS_CONTROLLER } from "./controllers/user.controller.js";
export const ROUTES = [
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
];
