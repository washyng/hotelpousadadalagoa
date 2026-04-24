document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('enviarWhats');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const checkin = document.querySelector('input[type="datetime-local"]')?.value || '';
        const mensagem = document.getElementById('mensagem')?.value || '';

        const texto = `Reserva\nNome: ${nome}\nEmail: ${email}\nCheck-in: ${checkin}\nMensagem: ${mensagem}`;
        const numero = '5538988269793'; // substitua pelo número real se necessário
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');
    });
});