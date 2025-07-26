import http from "http";
import { HttpRequestBuilder } from "./shared/http/http-request-builder.js";
import { HttpValidators } from "./shared/http/http-validators.js";

(() => {
  http
    .createServer(async (request, response) => {
      const httpRequestBuilder = new HttpRequestBuilder(request);
      request = await httpRequestBuilder.buildAsync();

      const httpValidators = new HttpValidators(request, response);
      const matchedRouteData = httpValidators.getMatchedRouteData();
      if (!matchedRouteData) return;

      await matchedRouteData?.handler(request, response);
    })
    .listen(3000, () =>
      console.info(`Server is running on http://localhost:3000`)
    );
})();
