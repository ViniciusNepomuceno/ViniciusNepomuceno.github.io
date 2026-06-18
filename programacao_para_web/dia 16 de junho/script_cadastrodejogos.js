const cadastro = document.getElementById('id_cadastro');
const idHidden = document.getElementById('id');
const nome = document.getElementById('id_nome');
const produtora = document.getElementById('id_produtora');
const ano = document.getElementById('id_ano');
const categoria = document.getElementById('id_categoria');
const plataformas = document.getElementById('id_plataformas');
const jogosCadastrados = document.getElementById('jogos_cadastrados');

function obterJogos() {
    const jogosJson = localStorage.getItem('jogos');
    return jogosJson ? JSON.parse(jogosJson) : [];
}

function salvarJogos(jogosArray) {
    localStorage.setItem('jogos', JSON.stringify(jogosArray));
}

function listarJogos() {
    const jogos = obterJogos();
    jogosCadastrados.innerHTML = '';

    jogos.forEach((jogo) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${jogo.nome}</td>
            <td>${jogo.produtora}</td>
            <td>${jogo.ano}</td>
            <td>${jogo.categoria}</td>
            <td>${jogo.plataformas}</td>
            <td>
                <button id="btn_editar" onclick="editarJogo('${jogo.id}')">Editar</button>
                <button id="btn_deletar" onclick="deletarJogo('${jogo.id}')">Excluir</button>
            </td>
        `;

        jogosCadastrados.appendChild(row);
    });
}

cadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const idValor = idHidden.value; 
    const nomeValor = nome.value;
    const produtoraValor = produtora.value;
    const anoValor = ano.value;
    const categoriaValor = categoria.value;
    const plataformasValor = plataformas.value;

    let jogos = obterJogos();

    if (idValor){
        jogos = jogos.map(jogo => {
            if (jogo.id === idValor) {
                return {id: idValor, nome: nomeValor, produtora: produtoraValor, ano: anoValor, categoria: categoriaValor, plataformas: plataformasValor};
            }
            return jogo;
        });
    } else {
        const novoJogo = {
            id: Date.now().toString(),
            nome: nomeValor,
            produtora: produtoraValor,
            ano: anoValor,
            categoria: categoriaValor,
            plataformas: plataformasValor,
        };
        jogos.push(novoJogo);
    }

    salvarJogos(jogos);
    listarJogos();
    cadastro.reset();
    idHidden.value = '';
});

window.editarJogo = function(id) {
    const jogos = obterJogos();
    const jogoParaEditar = jogos.find(jogo => jogo.id === id);

    if (jogoParaEditar) {
        idHidden.value = jogoParaEditar.id;
        nome.value = jogoParaEditar.nome;
        produtora.value = jogoParaEditar.produtora;
        ano.value = jogoParaEditar.ano;
        categoria.value = jogoParaEditar.categoria;
        plataformas.value = jogoParaEditar.plataformas;
    }
};

window.deletarJogo = function(id) {
    if (confirm("Quer deletar esse jogo da sua platilheira digital?")) {
        let jogos = obterJogos();
        jogos = jogos.filter(jogo => jogo.id !== id);

        salvarJogos(jogos);
        listarJogos();
    }
};

listarJogos();