export class HttpResponseBuilder {
  static #httpStatusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  };

  static #defaultContentType = { "Content-Type": "application/json" };

  /**
   * Sends a base response with the given status code and data.
   *
   * @param {Object} response - The HTTP response object.
   * @param {number} statusCode - The HTTP status code to send.
   * @param {Object} data - The data to send in the response body.
   */
  static #baseResponse(response, statusCode, data) {
    response.writeHead(statusCode, this.#defaultContentType);
    response.end(JSON.stringify(data));
  }

  /**
   * Sends a 200 OK response.
   *
   * @param {*} response - The HTTP response object.
   * @param {*} data - The data to send in the response body.
   */
  static ok(response, data) {
    this.#baseResponse(response, this.#httpStatusCodes.OK, data);
  }

  /**
   * Sends a 201 Created response.
   *
   * @param {*} response - The HTTP response object.
   * @param {*} data - The data to send in the response body.
   */
  static created(response, data) {
    this.#baseResponse(response, this.#httpStatusCodes.CREATED, data);
  }

  /**
   * Sends a 400 Bad Request response.
   *
   * @param {*} response - The HTTP response object.
   * @param {*} error - The error details to send in the response body.
   */
  static badRequest(response, error) {
    const body = { message: "Bad Request", error };
    this.#baseResponse(response, this.#httpStatusCodes.BAD_REQUEST, body);
  }

  /**
   * Sends a 404 Not Found response.
   *
   * @param {*} response - The HTTP response object.
   * @param {*} error - The error details to send in the response body.
   */
  static notFound(response, error) {
    const body = { message: "Not Found", error };
    this.#baseResponse(response, this.#httpStatusCodes.NOT_FOUND, body);
  }

  /**
   * Sends a 500 Internal Server Error response.
   *
   * @param {*} response - The HTTP response object.
   * @param {*} error - The error details to send in the response body.
   */
  static internalServerError(response, error) {
    const body = { message: "Internal Server Error", error };
    this.#baseResponse(
      response,
      this.#httpStatusCodes.INTERNAL_SERVER_ERROR,
      body
    );
  }
}
