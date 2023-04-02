document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Aquí puedes realizar la autenticación del usuario (por ejemplo, utilizando una API)
    alert(`Bienvenido a AmigosConecta, ${email}!`);
  });
  