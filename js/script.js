function enviarParaWhatsApp() {
            // Número de telefone da sua empresa. Inclua o código do país (55) e o DDD.
            const numeroWhatsApp = "5531971267844"; 

            // Captura os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Cria o texto da mensagem com os dados do formulário
            const textoMensagem = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Gostaria de saber sobre: ${mensagem}`;

            // Codifica o texto para ser usado na URL
            const textoCodificado = encodeURIComponent(textoMensagem);

            // Cria o link completo do WhatsApp
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoCodificado}`;

            // Abre o link em uma nova aba do navegador
            window.open(urlWhatsApp, '_blank');
        }