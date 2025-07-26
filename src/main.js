import http from "http";

import { ROUTER } from "./routes.js";
import { HttpRequestBuilder } from "./shared/http/http-request-builder.js";
import { HttpResponseBuilder } from "./shared/http/http-response-builder.js";

const server = http.createServer(async (request, response) => {
  const httpRequestBuilder = new HttpRequestBuilder(request);
  request = await httpRequestBuilder.buildAsync();

  const { url, method } = request;

  const routeData = ROUTER.getRouteData(request);

  if (!routeData) {
    HttpResponseBuilder.notFound(response, {
      message: `Cannot ${method} / ${url}`,
    });
    return;
  }

  const { handler } = routeData;
  await handler(request, response);
});

server.listen(3000, () => {
  console.info(`🔥 server is running on http://localhost:3000`);
});
