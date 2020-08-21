let Item = ["Jeans", "T-Shirt", "Socks"];

while (true) {
    let userEnter = prompt("Hi there, welcome to shop admin panel. What do you want (C, R, U, D)?");
    userEnter = userEnter.toLowerCase();
    if (userEnter == "c") {
        while (true) {
            let newItem = prompt("Enter the name of the new item");
            if (newItem == "") {
            }
            else {
                alert("Done");
                Item.push(newItem);
                break;
            }
        }
    } else if (userEnter == "r") {
        alert(`The current items are \n ${Item}`)
    } else if (userEnter == "u") {
        let updatePos = prompt("Enter the position you want to update");
        let updateItem = prompt("Enter the new name");
        Item[position] = updateItem;
    } else if (userEnter == "d") {
        let deletePos = prompt("Enter the position you want to delete");
        alert("Done");
        Item.splice(deletePos, 1);
    } else {
        alert("This command is not supported");
    }
}