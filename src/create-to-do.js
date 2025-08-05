// Creating an array for todo, if needed down the road
let toDoArray = [];

// Factory function to create todo list
export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called createtodo module...creating todo now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this object to the todoarray");

    // TODO: remove below two lines to code if array is not needed
    toDoArray.push ({Title, Description, DueDate, Priority, CheckList});
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, CheckList};
}