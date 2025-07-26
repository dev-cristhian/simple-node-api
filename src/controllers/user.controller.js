import { USERS_MOCK_ASYNC } from "../mocks/users.mock.js";
import { HttpResponseBuilder } from "../shared/http/http-response-builder.js";
export const USERS_CONTROLLER = {
  getUsers: async (request, response) => {
    try {
      const { order } = request.query;
      const users = await USERS_MOCK_ASYNC;

      if (!order || (order != "desc" && order != "asc")) {
        HttpResponseBuilder.ok(response, users);
        return;
      }

      const sortedUsers = users.sort((prev, curr) => {
        if (order === "desc") return prev.id < curr.id ? 1 : -1;
        return prev.id > curr.id ? 1 : -1;
      });

      HttpResponseBuilder.ok(response, sortedUsers);
    } catch (error) {
      HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },

  getUserById: async (request, response) => {
    try {
      const id = Number.parseInt(request?.param);

      const user = ((await USERS_MOCK_ASYNC) ?? []).find(
        (user) => user.id === id
      );

      if (!user) {
        return HttpResponseBuilder.badRequest(response, "User not found.");
      }

      HttpResponseBuilder.ok(response, user);
    } catch (error) {
      return HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },

  createUser: async (request, response) => {
    try {
      const { name, email, age } = request?.body ?? {};

      if (!name || !email || !age) {
        return HttpResponseBuilder.badRequest(
          response,
          "All fields are required."
        );
      }

      const users = await USERS_MOCK_ASYNC;
      const userAlreadyExists = users.some((user) => user.email === email);

      if (userAlreadyExists) {
        return HttpResponseBuilder.badRequest(
          response,
          `User with email ${email} already exists.`
        );
      }

      const newUser = {
        id: users.length + 1,
        name,
        email,
        age: Number.parseInt(age),
      };

      users.push(newUser);

      HttpResponseBuilder.created(response, newUser);
    } catch (error) {
      HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },

  updateUser: async (request, response) => {
    try {
      const id = Number.parseInt(request?.param);
      const { name, email, age } = request?.body ?? {};

      if (!name && !email && !age) {
        return HttpResponseBuilder.badRequest(
          response,
          "At least one field (name, email, age) is required to update the user."
        );
      }

      const users = await USERS_MOCK_ASYNC;
      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) {
        return HttpResponseBuilder.badRequest(response, "User not found.");
      }

      users[userIndex] = {
        id,
        name: name ?? users[userIndex].name,
        email: email ?? users[userIndex].email,
        age: age ? Number.parseInt(age) : users[userIndex].age,
      };

      HttpResponseBuilder.ok(response, users[userIndex]);
    } catch (error) {
      HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },

  deleteUser: async (request, response) => {
    try {
      const id = Number.parseInt(request?.param);

      const users = await USERS_MOCK_ASYNC;
      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) {
        return HttpResponseBuilder.badRequest(response, "User not found.");
      }

      users.splice(userIndex, 1);

      HttpResponseBuilder.ok(response, {
        message: "User deleted successfully.",
      });
    } catch (error) {
      HttpResponseBuilder.internalServerError(response, error?.message);
    }
  },
};
