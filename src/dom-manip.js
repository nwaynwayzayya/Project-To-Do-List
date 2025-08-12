import { blankProjectLoad } from "./blank-project-load";

// DOM manipulation to display the UI components
export function displayDefaultProject() {
    // DOM for the default project load
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value.trim();

    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;

        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        span.appendChild(document.createTextNode("\u00D7"));
        li.appendChild(span);
        ul.appendChild(li);

        document.getElementById("add-to-checklist").value = "";

        // Remove item on click
        span.addEventListener("click", () => {
            li.remove();
            updateCheckListStorage();
        });

        // Save checklist to local storage
        updateCheckListStorage();
    }
}

// Helper function to sync checklist with localStorage
function updateCheckListStorage() {
    const items = Array.from(document.querySelectorAll(".todo-ul li"))
        .map(li => li.childNodes[0].nodeValue.trim()); // get text without X
    localStorage.setItem("CheckList", items.join("."));
}


export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo() {
    // Gather data from local storage
    const Title = localStorage.getItem("Title");
    const Description = localStorage.getItem("Description");
    const DueDate = localStorage.getItem("DueDate");
    const Priority = localStorage.getItem("Priority");
    const CheckList = localStorage.getItem("CheckList");

    // If any core data is missing, exit gracefully
    if (!Title || !Description || !DueDate || !Priority || CheckList === null) {
        return;
    }

    // Clear any existing cards before displaying
    document.querySelectorAll(".card").forEach(card => card.remove());

    // Create the To-Do display card
    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    // Delete/Complete button
    const deleteToDoButton = document.createElement("button");
    deleteToDoButton.classList.add("remove-todo-button");
    deleteToDoButton.textContent = "Delete/Complete ToDo";
    card.appendChild(deleteToDoButton);
    deleteToDoButton.addEventListener("click", () => {
        card.remove();
        localStorage.clear();
    });

    // Display main To-Do info
    const _displayArray = { Title, Description, DueDate, Priority };
    for (let key in _displayArray) {
        const para = document.createElement("p");
        para.textContent = `${key}: ${_displayArray[key]}`;
        card.appendChild(para);
    }

    // Checklist label
    const checkListLabel = document.createElement("p");
    checkListLabel.textContent = "CheckList Items (Click item when completed):";
    checkListLabel.classList.add("check-list-label");
    card.appendChild(checkListLabel);

    // Checklist container
    const ul = document.createElement("ul");
    card.appendChild(ul);

    // Convert stored checklist string to array
    const _checkListArray = CheckList ? CheckList.split(".").filter(item => item.trim() !== "") : [];

    // Display checklist items if any
    _checkListArray.forEach(item => {
        const li = document.createElement("li");
        li.className = "display-li";
        li.textContent = item;

        // Restore strike-through state if saved
        if (localStorage.getItem(item) === "true") {
            li.classList.add("done");
        }

        // Toggle strike-through on click
        li.addEventListener("click", () => {
            if (li.classList.toggle("done")) {
                localStorage.setItem(item, "true");
            } else {
                localStorage.setItem(item, "false");
            }
        });

        ul.appendChild(li);
    });



    // Call on page refresh to check for existing strike throughs
    window.onload = function () {

        // Loop through current display li's on DOM and assign strike through CSS IF local storage API flas is set
        const liNodes = document.querySelectorAll(".display-li");
        liNodes.forEach(liNode => {
            if (localStorage.getItem(liNode.textContent) == "true") {
                console.log("inside the onload if .....");
                liNode.className = "done";
            }
        })
    }

}