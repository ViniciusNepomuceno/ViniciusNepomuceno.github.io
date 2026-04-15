
let form = document.getElementById("fomulario");

//let form = document.querySelector("fomulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Chamou!")

    let nome = document.getElementById("nome");
    console.log(nome.value);
    let idade = document.getElementById("idade");
    console.log(idade.value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Olá ${nome.value}, você tem ${idade.value} anos!`

});

//let nome = document.getElementById("nome");