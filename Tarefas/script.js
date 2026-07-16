const taskInput = document.getElementById("taskInput")
const buttonAdicionar = document.getElementById("btn")
const taskList = document.getElementById("taskList")

buttonAdicionar.addEventListener("click", function (event){
    event.preventDefault()
    
    const task = taskInput.value
    if (task === ""){
        alert("Escreva a tarefa")
        return
    }

    const lista = document.createElement("li")
    lista.textContent = task
    taskList.appendChild(lista)

    taskInput.value = ""


    const botao = document.createElement("button")
    lista.appendChild(botao)
    botao.textContent = "excluir"

    botao.addEventListener("click", function (){
        botao.parentElement.remove()
        botao.classList.add("btnExcluir")

        lista.appendChild(botao)
    })
})