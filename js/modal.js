// Função para trocar imagem na card (Global para ser acessada pelo onclick no HTML)
window.trocarImagem = function (imgThumb, srcNova) {
    const container = imgThumb.closest('.acomodacao-imagem');
    const mainImg = container.querySelector('.imagem-secao');

    if (mainImg) {
        // Efeito visual simples de fade
        mainImg.style.opacity = '0.7';
        setTimeout(() => {
            mainImg.src = srcNova;
            mainImg.style.opacity = '1';
        }, 150);
    }

    // Atualizar classe active nas miniaturas
    const thumbs = imgThumb.parentElement.querySelectorAll('.miniatura');
    thumbs.forEach(t => t.classList.remove('active'));
    imgThumb.classList.add('active');
};

document.addEventListener('DOMContentLoaded', function () {
    console.log("Modal script loaded");

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalGallery = document.getElementById('modalGallery');
    const closeBtn = document.querySelector('.modal-close');

    if (!modal) {
        console.error("Modal element #imageModal not found!");
        return;
    }

    function openModal(src, alt, galleryData) {
        modal.display = "block"; // Fallback
        modal.style.display = "block";
        modalImg.src = src;
        modalImg.alt = alt || 'Imagem ampliada';

        // Limpa galeria anterior e preenche com a nova
        if (modalGallery) {
            modalGallery.innerHTML = '';
            if (galleryData && galleryData.length > 0) {
                galleryData.forEach(imgSrc => {
                    const thumb = document.createElement('img');
                    thumb.src = imgSrc;
                    thumb.classList.add('modal-thumb');
                    if (imgSrc === src) {
                        thumb.classList.add('active');
                    }

                    thumb.onclick = function (e) {
                        e.stopPropagation();
                        modalImg.src = imgSrc;
                        document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    };

                    modalGallery.appendChild(thumb);
                });
            }
        }
    }

    // Adiciona o evento de clique em todas as imagens com classe 'imagem-secao'
    const images = document.querySelectorAll('img.imagem-secao');
    images.forEach(img => {
        img.onclick = function () {
            let gallery = [];
            try {
                if (this.dataset.gallery) {
                    gallery = JSON.parse(this.dataset.gallery);
                }
            } catch (e) {
                console.error("Erro ao ler dados da galeria", e);
            }
            openModal(this.src, this.alt, gallery);
        }
    });

    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
            const reservaModal = document.getElementById('reservaModal');
            if (reservaModal) reservaModal.style.display = "none";
        }
    });
});

// --- Lógica do Modal de Reserva (Novo) ---

document.addEventListener('DOMContentLoaded', function () {
    const reservaModal = document.getElementById('reservaModal');
    const closeReservaBtn = document.querySelector('.modal-close-reserva');
    const nomeReservaSpan = document.getElementById('nome-acomodacao-reserva');
    const btnEnviarWhats = document.getElementById('enviarWhats');

    // Função global para abrir o modal de reserva
    window.abrirReserva = function (nomeAcomodacao) {
        if (reservaModal) {
            reservaModal.style.display = 'block';
            if (nomeReservaSpan) {
                nomeReservaSpan.textContent = nomeAcomodacao;
            }
        } else {
            console.error("Modal de reserva não encontrado!");
        }
    };

    // Fechar Modal de Reserva
    if (closeReservaBtn) {
        closeReservaBtn.onclick = function () {
            reservaModal.style.display = 'none';
        }
    }

    // Fechar ao clicar fora (gerencia ambos modais)
    window.onclick = function (event) {
        const imageModal = document.getElementById('imageModal');
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
        if (event.target == reservaModal) {
            reservaModal.style.display = 'none';
        }
    }

    // Enviar para WhatsApp
    if (btnEnviarWhats) {
        btnEnviarWhats.onclick = function () {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const dataIn = document.getElementById('data-in').value;
            const dataOut = document.getElementById('data-out').value;
            const mensagem = document.getElementById('mensagem').value;
            const acomodacao = nomeReservaSpan ? nomeReservaSpan.textContent : "Não especificada";

            if (!nome || !dataIn) {
                alert("Por favor, preencha pelo menos Nome e Data de Check-in.");
                return;
            }

            const texto = `*Nova Solicitação de Reserva (Via Site)*\n\n` +
                `*Acomodação:* ${acomodacao}\n` +
                `*Nome:* ${nome}\n` +
                `*Email:* ${email}\n` +
                `*Check-in:* ${dataIn}\n` +
                `*Check-out:* ${dataOut}\n` +
                `*Mensagem:* ${mensagem}`;

            const numeroWhatsApp = "5538988269793";
            const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
            window.open(link, '_blank');

            // Limpar formulário e fechar modal
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('data-in').value = '';
            document.getElementById('data-out').value = '';
            document.getElementById('mensagem').value = '';
            reservaModal.style.display = 'none';
        };
    }
});