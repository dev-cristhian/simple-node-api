import { URL } from "url";
import { HTTP_STATUS_CODES } from "../constants/http.constant.js";

function baseResponse(response, statusCode, data) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
}

export const ok = (response, data) =>
  baseResponse(response, HTTP_STATUS_CODES.OK, data);

export const created = (response, data) =>
  baseResponse(response, HTTP_STATUS_CODES.CREATED, data);

export const noContent = (response) =>
  baseResponse(response, HTTP_STATUS_CODES.NO_CONTENT, {});

export const badRequest = (response, error) =>
  baseResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, {
    message: "Bad Request",
    error,
  });

export const unauthorized = (response, error) =>
  baseResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, {
    message: "Unauthorized",
    error,
  });

export const forbidden = (response, error) =>
  baseResponse(response, HTTP_STATUS_CODES.FORBIDDEN, {
    message: "Forbidden",
    error,
  });

export const notFound = (response, error) =>
  baseResponse(response, HTTP_STATUS_CODES.NOT_FOUND, {
    message: "Not Found",
    error,
  });

export const internalServerError = (response, error) =>
  baseResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, {
    message: "Internal Server Error",
    error,
  });

export const getBody = (request) => {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", (error) => {
      reject(error);
    });
  });
};

export const buildQueryParams = (request, url) => {
  const parsedUrl = new URL(`https://${request.headers.host}${url}`);
  return Object.fromEntries(parsedUrl.searchParams);
};
