let form = document.getElementById("formulario");
let cadastrados = document.getElementById("cadastrados");
let turma = [];

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let nome = document.getElementById("id_nome").value;
    let matricula = document.getElementById("id_matricula").value;

    let pessoa = {
        nome_chave: nome,
        matricula_chave: matricula
    }

    turma.push(pessoa);
    console.log(turma);

    cadastrarMediaStorage("infor2", turma);

});

function listarLocalStorage(){
    console.log(JSON.parse(localStorage.getItem("infor2")))
}

function cadastrarLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor))
}