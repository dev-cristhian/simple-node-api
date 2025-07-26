import { USERS_MOCK } from "../mocks/users.mock.js";
import { HttpResponseBuilder } from "../shared/http/http-response-builder.js";
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
        HttpResponseBuilder.ok(response, users);
        return;
      }

      const sortedUsers = users.sort((prev, curr) => {
        if (order === "desc") {
          return prev.id < curr.id ? 1 : -1;
        }
        return prev.id > curr.id ? 1 : -1;
      });

      HttpResponseBuilder.ok(response, sortedUsers);
    } catch (error) {
      HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },

  getUserById: async (request, response) => {
    const id = request?.param;

    const user = USERS_MOCK.find((user) => +user.id === +id);
    if (!user) {
      return HttpResponseBuilder.badRequest(response, "User not found.");
    }

    HttpResponseBuilder.ok(response, user);
  },

  createUser: async (request, response) => {
    const body = request.body || {};
    const { name, email, age } = body;

    if (!name || !email || !age) {
      return HttpResponseBuilder.badRequest(
        response,
        "Name, email, and age are required fields."
      );
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

      HttpResponseBuilder.created(response, newUser);
    } catch (error) {
      HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },
};
