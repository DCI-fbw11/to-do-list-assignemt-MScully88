function addNewItem() {
    let item = document.getElementById("input").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
}
document.onkeyup = function(e) {
    if (e.keyCode == 13) {
        addNewItem();
    }
};
function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}