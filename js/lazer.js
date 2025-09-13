document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos que vamos manipular
    const listaLazer = document.getElementById('lista-lazer');
    const galeriaCompleta = document.getElementById('galeria-completa');
    const imagemPrincipalContainer = document.getElementById('imagem-principal-container');
    const imagemPrincipal = document.getElementById('imagem-lazer-principal');
    
    // Novo seletor para o link "Todas as fotos"
    const linkTodasFotos = document.getElementById('todas-fotos-link');

    // Função para mostrar a imagem principal e esconder a galeria
    function mostrarImagemPrincipal(caminhoImagem) {
        imagemPrincipal.src = caminhoImagem;
        galeriaCompleta.classList.add('oculto');
        imagemPrincipalContainer.classList.remove('oculto');
    }

    // Função para mostrar a galeria e esconder a imagem principal
    function mostrarGaleriaCompleta() {
        galeriaCompleta.classList.remove('oculto');
        imagemPrincipalContainer.classList.add('oculto');
    }
    
    // Adiciona o ouvinte de clique em toda a lista
    if (listaLazer) {
        listaLazer.addEventListener('click', (event) => {
            const itemClicado = event.target.closest('li');

            if (itemClicado) {
                // Se o item clicado for o "Todas as fotos", mostra a galeria completa
                if (itemClicado.id === 'todas-fotos-link') {
                    mostrarGaleriaCompleta();
                } else {
                    // Caso contrário, mostra a imagem individual
                    const caminhoImagem = itemClicado.getAttribute('data-imagem');
                    if (caminhoImagem) {
                        mostrarImagemPrincipal(caminhoImagem);
                    }
                }
            }
        });
    }

    // Garante que a galeria completa é mostrada na primeira vez que a página carrega
    mostrarGaleriaCompleta();
});