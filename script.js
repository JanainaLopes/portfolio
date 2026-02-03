document.getElementById('portfolioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura os dados
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Pequena animação de feedback
    const btn = e.target.querySelector('button');
    btn.innerText = "Enviando...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato via: " + email);
        btn.innerText = "Enviar";
        btn.style.opacity = "1";
        e.target.reset();
    }, 1500);
});

// Efeito de scroll suave para o link "Vamos conversar"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});