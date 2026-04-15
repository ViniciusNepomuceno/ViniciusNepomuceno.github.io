
for(let i = 0; i < 5; i++){
    console.log(i);
}

let form = document.getElementById("id_formulario");

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let id_nome = document.getElementById("id_nome").value;
    let id_email = document.getElementById("id_email").value;
    let id_idade = document.getElementById("id_idade").value;
    let id_hobbies = document.getElementById("id_hobbies").value;
    let id_radio = document.querySelector('input[name="radio_s"]:checked').value;

        //1ª Opção
    let checkbox = document.querySelectorAll('input[name="checkbox_tech"]');
    let checks_selecionados = "";
    for(let i = 0; i < checkbox.length; i++){
        console.log(checkbox[i]);
        if(checkbox[i].checked){
            checks_selecionados += ` ${checkbox[i].value} `;
        }
        // checks_selecionados += checkbox[i].checked
    }

        //2ª Opção
    // let checks_selecionados2 = "";
    // let checkbox_outrOpcao = document.querySelectorAll('input[name="checkbox_tech"]:checked');
    
    // for(let i = 0; i < checkbox_outrOpcao.length; i++){
        // checks_selecionados2 += ` ${checkbox_outrOpcao[i].value} `;
        // checks_selecionados += checkbox[i].checked
    // }

    console.log(checks_selecionados)
    // let checkbox = document.querySelectorAll('input[name="checkbox_tech"]:checked');

    // console.log(checkbox);

    // for(let i = 0; i <= )


    //Exemplo de como mostrar na tela
    let bloco = document.createElement("div");
    bloco.setAttribute("class", "caixa");
    bloco.innerHTML = 
    `Nome: ${id_nome} <br>
     Email: ${id_email} <br>
     Idade: ${id_idade} <br>
     Sexo: ${id_radio} <br>
     Tecnologias: ${checks_selecionados} <br>
     Hobbies: ${id_hobbies}`;
    document.body.appendChild(bloco);
});