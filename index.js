let itens = []
localStorage.getItem("Tasks") ? '' : []


// só uma brincadeira
let test = () => {
    document.body.style.backgroundColor = 'black'
}
document.onload = test()

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
        alert("Não há nada para adiconar") 
    }
    

    
    
}

function registerTasks(task) {
    localStorage.getItem("tasks") ?? []
    task == '' ? console.log("Não há nada para adicionar") : localStorage.setItem("tasks", JSON.stringify(task))
}

document.getElementById('btn-add-item').addEventListener("click", () => getItem())