// script.js

let carrinho = [];

function adicionarItem(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    carrinhoElement.innerHTML = '';
    carrinho.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<span>${item}</span>
                         <button onclick="removerItem(${index})">Remover</button>`;
        carrinhoElement.appendChild(div);
    });
}

function finalizarCompra() {
    const mensagem = `Olá, gostaria de comprar os seguintes itens: ${carrinho.join(', ')}.`;
    // Aqui você pode enviar a mensagem para um número de WhatsApp específico
    // Usando a API do WhatsApp ou através de um link com a mensagem pré-formatada
    window.open(`https://wa.me/5514991254172?text=${encodeURIComponent(mensagem)}`);
                // https://api.whatsapp.com/send?phone=5514991254172&text=Teste
}
