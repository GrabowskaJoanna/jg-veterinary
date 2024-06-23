// removeHMRClient.js
if (typeof window !== "undefined") {
  // Disable WebSocket client
  window.__webpack_dev_server_client__ = null;
}
