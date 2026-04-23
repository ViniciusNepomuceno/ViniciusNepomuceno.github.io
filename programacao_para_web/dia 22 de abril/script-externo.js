document.addEventListener('DOMContentLoaded', (evento)=>{
    
    let bloco = document.createElement("div");
    bloco.innerHTML = "<strong>Bloco</strong>";

    bloco.style.backgroundColor = "darkblue";
    bloco.style.color = "white"
    bloco.style.fontSize = "20px";
    bloco.style.width = "100px";
    bloco.style.height = "100px";
    bloco.style.display = "flex";
    bloco.style.justifyContent = "center";
    bloco.style.alignItems = "center";
    
    document.body.appendChild(bloco);

    bloco.addEventListener('click', evento => {
        evento.preventDefault();
        bloco.textContent = "Clicado";
        bloco.style.backgroundColor = "lightblue";
        bloco.style.color = "darkblue";
    });

    bloco.addEventListener('dblclick', evento => {
        evento.preventDefault();
        bloco.textContent = "Clique duplo";
        bloco.style.backgroundColor = "red";
        bloco.style.color = "darkblue";
    });

    bloco.addEventListener('mouseover', evento => {
        evento.preventDefault();
        bloco.textContent = "Entrou";
        bloco.style.backgroundColor = "grey";
        bloco.style.color = "white";
    });

    bloco.addEventListener('mouseout', evento => {
        evento.preventDefault();
        bloco.textContent = "Saiu";
        bloco.style.backgroundColor = "black";
        bloco.style.color = "white";
    });

});

document.addEventListener('DOMContentLoaded', (evento) => {

    let caixa_de_texto = document.createElement("input");
    let caixa_de_texto2 = document.createElement('input');
    let informacao = document.createElement("h5");
    informacao.textContent = "Informação";
    
    //Adiciona como primeiro filho
    document.body.prepend(caixa_de_texto);
    document.body.prepend(informacao);

    //Adiciona como último filho
    //document.body.append(caixa_de_texto);

    caixa_de_texto.addEventListener('focus', (evento) => {
        evento.preventDefault();
        informacao.textContent = "Caixa de texto com foco."
    });

    caixa_de_texto.addEventListener('blur', (evento) => {
        evento.preventDefault();
        informacao.textContent = "Caixa de texto liberada."
    });

    //Adiciona depois da referência
    caixa_de_texto.after(caixa_de_texto2);

    //Adiciona antes da referência
    //caixa_de_texto.before(caixa_de_texto2);

    caixa_de_texto2.addEventListener('keydown', (evento) => {
        evento.preventDefault();
        informacao.textContent = "TECLA PRESSIONADA"
    });

    caixa_de_texto2.addEventListener('keyup', (evento) => {
        evento.preventDefault();
        informacao.textContent = "TECLA LIBERADA"
    });
})

document.addEventListener('DOMContentLoaded', (evento) => {
    const elemento = document.getElementById('coordenadas');

    document.addEventListener('mousemove', (e) => {
        elemento.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});   
})