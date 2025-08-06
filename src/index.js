// console.log("testing index.js webpack");

// // Testing the DOM
// const contentDiv = document.querySelector(".content");
// const testH1 = document.createElement("h1");
// testH1.textContent = "Hello world ... testing from index.js";
// contentDiv.appendChild(testH1);


import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm } from './dom-manip.js';

// Call blankProjectLoad on first Land
blankProjectLoad();

// Call DOM Manipulation module to control UI
// displayDefaultProject();

// TODO: click event module HERE for todo and project creaitons -- call out modules like buttons, dropdowns, selectors, etc
// Click events module
let clickEventModule = (function () {

    // Click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    // Click event for adding an item ot the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    // Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    // Click event to submit a new todo form to todo
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
    
}) ();

// Call create-to-do.js module file ad apply some objects/properties (this will eventually be replaced by UI input)
// const myToDo = createToDo("Grocery Run", "Go get groceries", "6/15/2022", "Low", "Meat, Eggs, Milk");
// const myToDo2 = createToDo("Homework", "Do Odin Project Wrok", "6/20/2022", "Medium", "Read module, Do ToDo Project");
// console.log("SHow me properties on myToDo from index.js...", myToDo);
// console.log("Shwo me properties on myToDo2 from index.js...", myToDo2);