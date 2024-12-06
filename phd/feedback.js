document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this); 

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
        alert('O feedback foi enviado com sucesso!'); 
        // 
        this.reset();
    })
    .catch(error => {
        alert('Erro ao enviar o formulário: ' + error.message);
    });
});
