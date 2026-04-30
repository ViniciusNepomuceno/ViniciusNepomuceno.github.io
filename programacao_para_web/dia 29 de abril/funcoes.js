/* Funções em JavaScript
    Declaração e chamada de funções
*/

//Declaração de função sem retorno - tipo VOID
function mensagem(parametro, parametro2){
    console.log(`Olá, ${parametro}!
        Tu é o cara, ${parametro2}!
    `);
}

//Função com retorno
function soma(a, b){
    return b + a;
}

//Chamada de fundo
mensagem("mundo", "Vinicius");
console.log(soma(1, 3));

// mensagem("Ramiro", soma(2, 5));

// Declaração de funçao na variável
// Expressão de função (função anônima atribuída)
let dobro = function(){
    return num * 2;
}
// Com Arrow Function ()=>{}
    let dobroModerno = (num) => {
        return num * 2;
}
// Modo simplificado com Arrow Function
let dobroSimples = num => num * 2;

console.log(dobro(3));
console.log(dobroModerno(4));
console.log(dobroSimples(2));