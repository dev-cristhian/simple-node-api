export class HttpRequestBuilder {
  #request = null;

  constructor(request) {
    this.#request = request;
  }

  /**
   * Build the request object with query, param, and body properties
   * @async
   * @public
   * @returns {http.IncomingMessage} - the built request object with query, param, and body properties
   */
  async buildAsync() {
    this.#request.query = this.#getQueryParams();
    this.#request.param = this.#getParamByPathName();
    this.#request.body = await this.#getBodyAsync();
    return this.#request;
  }

  /**
   * Get the original request object
   * @private
   * @returns {http.IncomingMessage} - the original request object
   */
  #getRequest() {
    return this.#request;
  }

  /**
   * Get the query parameters from the request URL.
   * @private
   * @returns {Object} - an object containing the query parameters as key-value pairs
   */
  #getQueryParams() {
    const { searchParams } = this.#getBaseURL();
    return Object.fromEntries(searchParams);
  }

  /**
   * Get the last segment of the path name if it exists; otherwise null
   * @private
   * @returns {string|null} - the last segment of the path name if it exists; otherwise null
   */
  #getParamByPathName() {
    const { pathname } = this.#getBaseURL();
    const splitPath = pathname.split("/").filter(Boolean);

    if (splitPath.length != 2) return null;
    return splitPath[splitPath.length - 1] || null;
  }

  /**
   * Get the body of the request.
   * @private
   * @async
   * @returns {Promise<Object|null>} - the parsed body of the request if it is a POST, PUT, or PATCH request; otherwise null
   */
  #getBodyAsync() {
    const request = this.#getRequest();
    const allowedMethods = ["POST", "PUT", "PATCH"];
    if (!allowedMethods.includes(request.method)) return null;

    return new Promise((resolve, reject) => {
      let body = "";
      request.on("data", (chunk) => (body += chunk.toString()));
      request.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
      request.on("error", (error) => reject(error));
    });
  }

  /**
   * Get the base URL of the request
   * @private
   * @returns {URL} - the base URL of the request
   */
  #getBaseURL() {
    const request = this.#getRequest();
    const { url } = request;
    return new URL(`https://${request.headers.host}${url}`);
  }
}
