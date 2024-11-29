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

$(function () {
    $(document).on('click', '.number-spinner button', function () {
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });
});