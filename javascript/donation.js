document.getElementById("donateBtn")
.addEventListener("click", async function name(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var amount = document.getElementById("amount").value;

  const donate = {
    name: name,
    email: email,
    amount: amount
  };

  try {
    const baseUrl = "https://localhost:7042/Donation";
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donate),
    });

    if (response.ok) {
        const amount = parseFloat(amount);
        let message = "Thank you for your generous donation!";
        if (amount >= 100) {
          message = "Wow! Your incredible contribution of $" + amount + " will make a huge difference.";
        } else if (amount >= 50) {
          message = "Thank you for your thoughtful donation of $" + amount + ". Every bit helps!";
        }
        Swal.fire({
          title: "Donation Successful!",
          text: message,
          icon: 'success',
        });
      }
      
  } catch (error) {
    console.log(error);
  }
});