const wsScheme = window.location.protocol === "https:" ? "wss" : "ws";

export default {
  baseUrl: 'http://127.0.0.1:8000/api',

  baseWebSocketUrl: wsScheme + '://localhost:8000/api'
}