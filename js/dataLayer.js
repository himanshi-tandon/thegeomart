// dataLayer.js
// Shared data layer helper

window.alloy = window.alloy || function(command, payload) {
  console.log("Simulated Adobe Web SDK call:", command, payload);
};

console.log("dataLayer.js loaded");
