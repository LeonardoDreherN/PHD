document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado da maneira padrão

    const formData = new FormData(this); // Captura os dados do formulário

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o formulário');
        }
        return response.json();
    })
    .then(data => {
        alert('O feedback foi enviado com sucesso!'); // Alerta de sucesso após o envio
        // Limpar o formulário após o envio bem-sucedido, se necessário
        this.reset();
    })
    .catch(error => {
        alert('Erro ao enviar o formulário: ' + error.message);
    });
});