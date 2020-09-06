(function (window) {
  window.__env = window.__env || {};

  // base url
  window.__env.apiUrl = 'http://localhost:3000';
  // Storage Type
  window.__env.storage = localStorage;

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));
