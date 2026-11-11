
function add() {
    let n = document.getElementById("name").value;
    let r = document.getElementById("roll").value;
    let d = document.getElementById("dept").value;

    if (!n || !r || !d) {
        alert("Fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = n + " - " + r + " - " + d;
    document.getElementById("list").appendChild(li);
}
