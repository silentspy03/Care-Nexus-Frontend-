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

document.getElementById("signUpBtn")
.addEventListener("click", async function name(event) {
  event.preventDefault();
  var fullName = document.getElementById("username").value;
  var phoneNumber = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  const signUp = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  try {
    const baseUrl = "https://localhost:7042/Signup";
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUp),
    });

    if (response.ok) {
      window.location.href = "/html/login.html";
      alert("Successfully created. Please login to continue.");
    }
  } catch (error) {
    console.log(error);
  }
});