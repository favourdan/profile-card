document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));

    let isValid = true;

    if (!name) {
      showError("error-name", "Full name is required");
      isValid = false;
    }

    if (!email) {
      showError("error-email", "Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      showError("error-email", "Please enter a valid email address");
      isValid = false;
    }

    if (!subject) {
      showError("error-subject", "Subject is required");
      isValid = false;
    }

    if (!message) {
      showError("error-message", "Message is required");
      isValid = false;
    } else if (message.length < 10) {
      showError("error-message", "Message must be at least 10 characters");
      isValid = false;
    }

    if (!isValid) return;

    showToast("✅ Message sent successfully!");

    setTimeout(() => form.reset(), 1000);
  });

  function showError(id, msg) {
    document.getElementById(id).textContent = msg;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }
});
