document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const faq = header.parentElement;
        
        // Fechar todas as outras perguntas antes de abrir a selecionada
        document.querySelectorAll('.faq').forEach(faqItem => {
            if (faqItem !== faq) {
                faqItem.classList.remove('active');
            }
        });

        // Alternar a classe 'active' para a pergunta clicada
        faq.classList.toggle('active');
    });
});