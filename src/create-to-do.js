import { compareAsc, format, parseISO, startOfToday } from "date-fns";
import { clearForm } from "./dom-manip.js";
import { saveToDoLocal } from './manage-local-storage.js'

// Creating an array for ToDo, if needed down the road
let todoArray = [];

// Factory function to create todo list
export const createToDo = () => {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    // Check to see if empty fields exist
    if (Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description, and Due Date are required fields, please try again!");
        return;
    }

    // Check to see if a pre-date was entered
    if (parseISO(DueDate) < startOfToday()) {
        alert("You have entered a date that has already passed! Please enter a date greater than or equal to today!");
        console.log("due date", parseISO(DueDate));
        console.log("date now", startOfToday());
        return;
    }

    // Loop over the nodelist of check list items from the DOM and format to string
    const nodeListCheckList = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i=0; i<nodeListCheckList.length; i++) {
        // Strip off the "x" from end of each li then push to temp array
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        CheckListArray.push(strippedCheckList);
    }

    // Strip off the checklist array and convert to string with commas
    let CheckList = CheckListArray.join(", ");

    console.log("Called createToDo module...creating todo now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this object to the todoarray....");

    // Todo: remove below two lines of code if array is not needed
    todoArray.push({Title, Description, DueDate, Priority, CheckList});
    console.log(todoArray);

    // Call storage module and push object to local storage
    saveToDoLocal({ Title, Description, DueDate, Priority, CheckList});

    // Reset the form after successful submission
    clearForm();

    return {Title, Description, DueDate, Priority, CheckList};
}