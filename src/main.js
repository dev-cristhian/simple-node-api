import http from "http";

import { ROUTER } from "./routes.js";
import { notFound } from "./utils/http.util.js";

const server = http.createServer(async (request, response) => {
  const { url, method } = request;

  const routeData = ROUTER.getRouteData(url, method);

  if (!routeData) {
    notFound(response, { message: `Cannot ${method} / ${url}` });
    return;
  }

  const { handler } = routeData;
  await handler(request, response);
});

server.listen(3000, () => {
  console.info(`🔥 server is running on http://localhost:3000`);
});
