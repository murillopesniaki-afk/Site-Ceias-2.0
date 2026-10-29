// Seleciona todos os cartões que estão escritos no HTML
const cartoes = document.querySelectorAll('.cartao');

// Para cada cartão encontrado, adiciona o evento de clique
cartoes.forEach((cartao) => {
    cartao.addEventListener('click', () => {
        // Liga/Desliga a classe 'active' que faz o CSS girar o card
        cartao.classList.toggle('active');
    });
});