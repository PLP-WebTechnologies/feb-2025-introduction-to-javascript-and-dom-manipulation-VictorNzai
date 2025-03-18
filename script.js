// Change text content dynamically
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("text").textContent = "The text has been changed using JavaScript!";
});

// Add a new item to the list
document.getElementById("addElement").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New item added";
    document.getElementById("list").appendChild(newItem);
});

// Remove the last item from the list
document.getElementById("removeElement").addEventListener("click", function() {
    let list = document.getElementById("list");
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    } else {
        alert("No more items to remove!");
    }
});
