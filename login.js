
 // login
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const matriculaInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado antes da validação

        const matricula = matriculaInput.value.trim();
        const password = passwordInput.value.trim();

        // Verificação das credenciais do primeiro usuário
        if (matricula === "3904957" && password === "Loga2024") {
            // Redirecionar para a tela de dashboard
            window.location.href = "powerbi.html";
        }
        // Verificação das credenciais do segundo usuário
        else if (matricula === "Admin" && password === "Loga2024") {
            // Redirecionar para a tela de dashboard
            window.location.href = "powerbi.html";
        }
        // Se as credenciais não correspondem a nenhum usuário, exibir mensagem de erro
        else {
            alert("Matrícula ou senha incorretas. Por favor, tente novamente.");
        }
    });
});

 // Visualizar senha
document.addEventListener("DOMContentLoaded", function() {
    const showPasswordIcon = document.getElementById("show-password");
    const hidePasswordIcon = document.getElementById("hide-password");
    const passwordInput = document.getElementById("password");

    showPasswordIcon.addEventListener("click", function() {
        // Mostrar senha e alternar ícones
        passwordInput.type = "text";
        showPasswordIcon.style.display = "none";
        hidePasswordIcon.style.display = "block";
    });

    hidePasswordIcon.addEventListener("click", function() {
        // Ocultar senha e alternar ícones
        passwordInput.type = "password";
        hidePasswordIcon.style.display = "none";
        showPasswordIcon.style.display = "block";
    });
});
