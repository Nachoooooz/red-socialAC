document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
  
    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden. Por favor, verifica e intenta de nuevo.");
      return;
    }
  
    // Aquí puedes realizar la creación de la cuenta del usuario (por ejemplo, utilizando una API)
    alert(`¡Gracias por registrarte, ${fullName}! Ahora puedes iniciar sesión.`);
  });
  