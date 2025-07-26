import { USERS_MOCK } from "../mocks/users.mock.js";
import {
  badRequest,
  created,
  getBody,
  internalServerError,
  ok,
} from "../utils/http.util.js";
export const USERS_CONTROLLER = {
  getUsers: async (request, response) => {
    const { order } = request.query;

    try {
      const users = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(USERS_MOCK);
        }, 1000);
      });

      if (!order || (order != "desc" && order != "asc")) {
        ok(response, users);
        return;
      }

      const sortedUsers = users.sort((prev, curr) => {
        if (order === "desc") {
          return prev.id < curr.id ? 1 : -1;
        }
        return prev.id > curr.id ? 1 : -1;
      });

      ok(response, sortedUsers);
    } catch (error) {
      internalServerError(response, error?.message);
    }
  },

  getUserById: async (request, response) => {
    const id = request?.params;

    const user = USERS_MOCK.find((user) => +user.id === +id);
    if (!user) {
      return badRequest(response, "User not found.");
    }

    ok(response, user);
  },

  createUser: async (request, response) => {
    const body = await getBody(request);
    const { name, email, age } = body;

    if (!name || !email || !age) {
      return badRequest(response, "Name, email, and age are required fields.");
    }

    try {
      const newUser = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 4,
            name,
            email,
            age,
          });
        }, 1000);
      });

      created(response, newUser);
    } catch (error) {
      internalServerError(response, error?.message);
    }
  },
};
