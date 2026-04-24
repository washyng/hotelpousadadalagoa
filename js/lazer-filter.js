document.addEventListener('DOMContentLoaded', () => {
    const filtroBotoes = document.querySelectorAll('.filtros-lazer button');
    const imagens = document.querySelectorAll('.cards-lazer img');

    if (!filtroBotoes.length || !imagens.length) return;

    filtroBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const categoria = botao.getAttribute('data-filter');

            imagens.forEach(img => {
                if (categoria === 'all' || img.dataset.category === categoria) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });
});