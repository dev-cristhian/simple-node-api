import { USERS_MOCK } from "../mocks/users.mock.js";
import {
  badRequest,
  created,
  getBody,
  internalServerError,
  ok,
} from "../utils/http.util.js";
export const USERS_CONTROLLER = {
  getUser: async (_, response) => {
    try {
      const users = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(USERS_MOCK);
        }, 1000);
      });

      ok(response, users);
    } catch (error) {
      internalServerError(response, error?.message);
    }
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
