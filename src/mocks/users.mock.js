/**
 * Mock data for users
 * @description This module provides a mock dataset of users for testing purposes.
 * @module users.mock
 * @typedef {Object} User
 * @property {number} id - Unique identifier for the user
 * @property {string} name - Name of the user
 * @property {string} email - Email address of the user
 * @property {number} age - Age of the user
 * @typedef {User[]} Users
 */
export const USERS_MOCK_ASYNC = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 28,
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 25,
      },
    ]);
  }, 1000);
});
