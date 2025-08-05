console.log("testing index.js webpack");

// Testing the DOM
const contentDiv = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "Hello world ... testing from index.js";
contentDiv.appendChild(testH1);