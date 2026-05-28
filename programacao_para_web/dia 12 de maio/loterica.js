let form = document.getElementById("formulario");

//Inicializando um array vazio
let fila_espera = [];

let resultado_espera = document.getElementById("resultado_espera");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let nome = document.getElementById("nome").value;
    let tipo_atendimento = document.querySelector("input[name='tipo_atendimeto']:checked");

    adicionar(nome, tipo_atendimento);
    listar();
});


function adicionar(param_nome, param_tipo_atendimento){
    if(param_tipo_atendimento = "prioridade"){
        fila_espera.unshift(param_nome)
    }else{
        fila_espera.push(param_nome)
    }
};

function listar(){
    resultado_espera.innerHTML = "";
    for(let i = 0; i <fila_espera.length; i++){
        resultado_espera.innerHTML += `<p>
        Índice ${i} - Valor: ${fila_espera[i]}</p>
        <input type="button" onclick="editar(${i})" value="Editar">
        <input type="button" onclick="deletarIndice(${i})" value="Excluir">
        <br/>`;
    }
}

function deletarIndice(indice){
    console.log(indice);
    fila_espera.splice(indice, 1);
    listar();
}

function editar(indice){
    console.log(indice);
    fila_espera[indice] = prompt(`Digite um novo nome:`);
    listar();
}

function atender(){
    fila_espera.shift();
    listar();
}

function naoEsperou(){
    fila_espera.pop();
    listar();
}