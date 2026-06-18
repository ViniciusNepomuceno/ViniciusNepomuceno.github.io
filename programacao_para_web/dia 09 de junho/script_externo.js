let form = document.getElementById("id_form");

let turma = [];

form.addEventListener("submit", evento => {
    evento.preventDefault();
    let nome = document.getElementById("id_nome").value;
    turma.push(nome);
    console.log(turma);
    cadastrarLocalStorage("infor2", turma.join(", "));
});

function cadastrarLocalStorage(chave, valor){
    localStorage.setItem(chave, valor);
}

function listarLocalStorage(){
    let vetor_temp = localStorage.getItem("infor2").split(" - ");

    resultado.innerHTML = "";

    for(let i = 0; i < vetor_temp.length; i++){
    div.innerHTML = `${vetor_temp[i]} <br>`
    resultado.append(div);
    }
}