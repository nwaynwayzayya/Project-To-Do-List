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
    const addItem = document.getElementById("add-to-checklist").value;

    if (addItem!== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;

        const span = document.createElement("span");
        span.className = "remove-checklist-item";

        // This create an "X" on the screen
        const removeIcon = document.createTextNode("\u00D7");

        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);

        document.getElementById("add-to-checklist").value = "";

        // DOM check for existing check list items already present
        if (document.querySelectorAll("li").length > 0) {
            console.log("INSIDE MODULE IF .....", document.querySelectorAll("li").length)
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            // DOM to bind click event to each node in nodelist and remove node if clicked
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}