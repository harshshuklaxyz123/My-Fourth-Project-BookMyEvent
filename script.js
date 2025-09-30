document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("confirmation").innerText =
        "✅ Booking confirmed! Check your email for details.";
      form.reset();
    });
  }
});

  // Simple form submission simulation
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        status.innerText = "✅ Your message has been sent successfully!";
        status.style.color = "green";
        form.reset();
      });
    }
  });