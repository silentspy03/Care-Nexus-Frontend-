const togglePasswordIcons = document.querySelectorAll('.togglePassword');
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function (e) {
        const targetId = this.getAttribute('data-target');
        const passwordField = document.getElementById(targetId);

        // toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
});

document
  .getElementById("loginBtn")
  .addEventListener("click", async function name(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const login = {
        email: email,
        password: password
    };

    try {
      const baseUrl = "https://localhost:7042/Login";
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (response.ok) {
        window.location.href = "/html/index.html";
        alert("Logged in successfully!");
      }
      else{
        alert("Invalid username or password.");
      }
    } catch (error) {
      console.log(error);
    }
  });

