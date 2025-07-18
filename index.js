let itens = []
localStorage.getItem("Tasks") ? '' : []

function getItem() {
    let getItem = document.getElementById("input-add-item").value
    itens.push(getItem)
    addItemToList(getItem)
}

function addItemToList(item) {
    let lista = document.getElementById("lista")
    let listItem = document.createElement("div")
    listItem.id = "item"
    if (item != "") {
        for (let i = 0; i < 99; i++) {
            listItem.innerHTML = `
                <p>${item}</p>
                <button id="edit-item" data-index="${i}">Edit</button>
                <button id="exclude-item" data-index="${i}">Exclude</button>
            `
        }
        lista.appendChild(listItem)
        registerTasks(item)
    } else {
        nothingToAdd()
    }
}

function removeToList(event) {

}

function registerTasks(task) {
    localStorage.getItem("tasks") ?? []
    task == '' ? nothingToAdd() : localStorage.setItem("tasks", JSON.stringify(task))
}

function nothingToAdd() {
    alert("Não há nada para adicionar")
}

document.getElementById('btn-add-item').addEventListener("click", () => getItem())