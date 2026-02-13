document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
const note = document.getElementById("formNote");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  note.className = "form-note";
  note.textContent = "";

  const requiredFields = ["name", "email", "service", "message"];
  let hasError = false;

  requiredFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    const invalid = value.length === 0 || (fieldId === "email" && !isValidEmail(value));

    field.classList.toggle("is-invalid", invalid);
    if (invalid) {
      hasError = true;
    }
  });

  if (hasError) {
    note.classList.add("error");
    note.textContent = "Please complete all fields with a valid email address.";
    return;
  }

  note.classList.add("success");
  note.textContent = "Request received. Next step: connect this form to your email or CRM endpoint.";
  form.reset();
});
