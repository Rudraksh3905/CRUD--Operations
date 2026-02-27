let data = null;

function Save() {
    const name = document.getElementById("Name").value;
    const phone = document.getElementById("Phone").value;
    const city = document.getElementById("City").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${city}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="Del(this)">Delete</button>
            <button class="btn btn-primary btn-sm" onclick="Edit(this)">Edit</button>
        </td>
    `;

    document.getElementById("tbdy").appendChild(row);

    clearInputs();
}

function Del(button) {
    button.parentNode.parentNode.remove();
}

function DeleteAll() {
    document.getElementById("tbdy").innerHTML = "";
}

function Edit(button) {
    const row = button.parentNode.parentNode;
    data = row;

    const cells = row.children;

    document.getElementById("Name").value = cells[0].innerText;
    document.getElementById("Phone").value = cells[1].innerText;
    document.getElementById("City").value = cells[2].innerText;
}

function Update() {
    if (!data) return;

    const name = document.getElementById("Name").value;
    const phone = document.getElementById("Phone").value;
    const city = document.getElementById("City").value;

    const cells = data.children;

    cells[0].innerText = name;
    cells[1].innerText = phone;
    cells[2].innerText = city;

    clearInputs();
    data = null;
}

function clearInputs() {
    document.getElementById("Name").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("City").value = "";
}