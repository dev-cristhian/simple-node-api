import { ROUTES } from "../../routes.js";
import { HttpResponseBuilder } from "./http-response-builder.js";

export class HttpValidators {
  #httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  #request = null;
  #response = null;
  constructor(request, response) {
    this.#request = request;
    this.#response = response;
  }
  /**
   * Validates the incoming HTTP request against the defined routes.
   *
   * @returns {Object|null} Returns matched route data or null if no match found.
   */
  getMatchedRouteData() {
    const { url, method } = this.#request;
    if (!url || !method || !this.#httpMethods.includes(method)) return null;

    const sanitizedUrl = url.split("?")[0].replace(/\/+$/, "");
    const routes = this.#getRoutes();

    const matchedRouteData =
      routes.find((route) => {
        const routeParts = route.url.split("/").filter(Boolean);
        const urlParts = sanitizedUrl.split("/").filter(Boolean);

        if (route.method !== method || routeParts.length !== urlParts.length) {
          return null;
        }

        return routeParts.every(
          (part, index) => part.startsWith(":") || part === urlParts[index]
        );
      }) || null;

    if (!matchedRouteData) {
      HttpResponseBuilder.notFound(this.#response, {
        message: `Cannot ${method} / ${url}`,
      });
      return null;
    }

    return matchedRouteData;
  }

  /**
   * Retrieves the defined routes.
   *
   * @returns {Array} Returns an array of route objects.
   */
  #getRoutes() {
    return ROUTES || [];
  }
}
