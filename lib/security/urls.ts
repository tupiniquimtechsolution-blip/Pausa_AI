function normalizedHostname(hostname: string) {
  return hostname.trim().toLowerCase().replace(/^\[/, "").replace(/\]$/, "");
}

export function isPrivateAppHostname(hostname: string) {
  const value = normalizedHostname(hostname);
  return (
    value === "localhost"
    || value === "127.0.0.1"
    || value === "::1"
    || value.startsWith("10.")
    || value.startsWith("192.168.")
    || /^172\.(1[6-9]|2\d|3[0-1])\./.test(value)
  );
}

export function safeRelativeAppPath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new Error("APP_REDIRECT_PATH_INVALID");
  }
  const parsed = new URL(path, "http://pausa.local");
  if (parsed.origin !== "http://pausa.local") {
    throw new Error("APP_REDIRECT_PATH_INVALID");
  }
  return `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

function configuredAppUrl() {
  const configured = process.env.APP_BASE_URL?.trim();
  if (!configured) return null;
  const base = new URL(configured);
  if (!["http:", "https:"].includes(base.protocol)) throw new Error("APP_BASE_URL_PROTOCOL_INVALID");
  return base;
}

export function localRequestOrigin(request: Request) {
  const configured = configuredAppUrl();
  if (configured && !isPrivateAppHostname(configured.hostname)) return null;

  const requestUrl = new URL(request.url);
  const host = request.headers.get("host")?.trim();
  if (host) {
    try {
      const hostUrl = new URL(`${requestUrl.protocol}//${host}`);
      if (isPrivateAppHostname(hostUrl.hostname)) return hostUrl.origin;
    } catch {
      // Invalid Host values are ignored.
    }
  }
  return isPrivateAppHostname(requestUrl.hostname) ? requestUrl.origin : null;
}

export function publicAppUrl(
  request: Request,
  path: string,
  options: { preferRequestOriginForLocal?: boolean } = {}
) {
  const relativePath = safeRelativeAppPath(path);
  const localOrigin = options.preferRequestOriginForLocal ? localRequestOrigin(request) : null;
  if (localOrigin) {
    return new URL(relativePath, localOrigin);
  }

  const configured = configuredAppUrl();
  if (configured) {
    return new URL(relativePath, configured);
  }
  const requestUrl = new URL(request.url);
  return new URL(relativePath, requestUrl.origin);
}
