/* Garantir que os campos de altura e peso aceitem número e caracteres como virgulas e pontos. */
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");

alturaInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.,]/g, "");
});

pesoInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.,]/g, "");
});

/* Substituir vírgulas por pontos automaticamente para evitar erros de cálculo.*/
alturaInput.addEventListener("input", function () {
    this.value = this.value.replace(/,/g, ".");
});

pesoInput.addEventListener("input", function () {
    this.value = this.value.replace(/,/g, ".");
});



/* Função para calcular o IMC e exibir o resultado. */
function calcularIMC() {
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Com o Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Com Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obeso grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obeso grau II";
    } else {
        classificacao = "Obeso grau III";
    }

    const resultadoIMC = document.getElementById("resultadoIMC");
    resultadoIMC.textContent = `Seu IMC é ${calcularIMC(2)} Você está (${classificacao}).`; 
}