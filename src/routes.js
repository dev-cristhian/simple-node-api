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
  {
    url: "/users/:id",
    method: "PUT",
    handler: USERS_CONTROLLER.updateUser,
  },
  {
    url: "/users/:id",
    method: "DELETE",
    handler: USERS_CONTROLLER.deleteUser,
  },
];
