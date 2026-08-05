// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Efeito de hover que segue o mouse nos cards de serviço
document.querySelectorAll('.glass-hover').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});


// Formulário de contato: validação simples + feedback visual
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

emailjs.init({ publicKey: 'yboGpGEG5NHtxeMJH' });


if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const serviceInput = document.getElementById('service');
        const messageInput = document.getElementById('message');

        let valid = true;
        [nameInput, emailInput, messageInput].forEach((input) => input.classList.remove('input-error'));

        if (!nameInput.value.trim()) {
            nameInput.classList.add('input-error');
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('input-error');
            valid = false;
        }

        if (!messageInput.value.trim()) {
            messageInput.classList.add('input-error');
            valid = false;
        }

        feedback.classList.remove('hidden');

        if (!valid) {
            feedback.textContent = 'Preencha corretamente os campos destacados.';
            feedback.style.color = '#ffb4ab';
            return;
        }

        emailjs.send(
            'service_4d7etur',
            'template_70vpsjd',
            {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                service: serviceInput.value.trim(),
                message: messageInput.value.trim()
            }
        )
            .then(() => {
                feedback.textContent = 'Mensagem enviada com sucesso! Retornaremos em breve.';
                feedback.style.color = '#00f0ff';

                form.reset();
            })
            .catch((error) => {
                console.error('Erro ao enviar mensagem:', error);

                feedback.textContent = 'Não foi possível enviar sua mensagem. Tente novamente.';
                feedback.style.color = '#ffb4ab';
            });
    });
}
