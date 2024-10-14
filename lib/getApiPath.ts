
export const getApiPath = (path: string) =>
  `https://og0cgcsw80gk88cs88wkk0s0.server.yatochka.dev/${path.startsWith("/") ? path.slice(1) : path}`;
export const getApiPathWebSocket = (path: string) =>
  `wss://og0cgcsw80gk88cs88wkk0s0.server.yatochka.dev/${path.startsWith("/") ? path.slice(1) : path}`;
