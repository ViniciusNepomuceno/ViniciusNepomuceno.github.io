document.getElementById('pedidos').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const ingredientes = Array.from(document.querySelectorAll('input[name="ingredientes"]:checked')).map(input => input.value);
    const tamanho = Array.from(document.querySelectorAll('input[name="tamanho"]:checked')).map(input => input.value);
    const massa = document.getElementById('massa').value;
    const endereco = document.getElementById('endereco').value;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Obrigado por compara pela Array de Sabores! Nos já recebemos o pedido e você receberá sua pizza no dia 30 de fevereiro.</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Ingredientes:</strong> ${ingredientes.join(', ')}</p>
        <p><strong>Tamanho:</strong> ${tamanho.join(', ')}</p>
        <p><strong>Massa:</strong> ${massa}</p>
        <p><strong>Endereço de Entrega:</strong> ${endereco}</p>
    `;
    document.body.appendChild(resultado);
});