export type MapProvider = {
  id: string;
  renderMode: "LOCAL_POLYLINE" | "REMOTE_MAP";
  requiresCredential: boolean;
  credentialConfigured: boolean;
};

export function getMapProvider(): MapProvider {
  const configured = process.env.MAP_PROVIDER?.trim();
  if (!configured) {
    return {
      id: "LOCAL_ROUTE_DATA",
      renderMode: "LOCAL_POLYLINE",
      requiresCredential: false,
      credentialConfigured: true
    };
  }
  return {
    id: configured,
    renderMode: "REMOTE_MAP",
    requiresCredential: true,
    credentialConfigured: Boolean(process.env.MAP_PROVIDER_API_KEY)
  };
}
