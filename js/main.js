(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  var action = form.getAttribute("action") || "";
  var formsConfigured =
    action.indexOf("YOUR_FORM_ID") === -1 && action.indexOf("formspree.io") !== -1;

  form.addEventListener("submit", function (event) {
    clearErrors(form);

    var name = form.querySelector("#name");
    var email = form.querySelector("#email");
    var message = form.querySelector("#message");
    var valid = true;

    if (!name.value.trim()) {
      showError(name, "Please enter your name.");
      valid = false;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    if (!message.value.trim()) {
      showError(message, "Please enter a message.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
      return;
    }

    if (!formsConfigured) {
      event.preventDefault();
      var subject = encodeURIComponent("Message from " + name.value.trim());
      var body = encodeURIComponent(
        "Name: " +
          name.value.trim() +
          "\nEmail: " +
          email.value.trim() +
          "\n\n" +
          message.value.trim()
      );
      window.location.href =
        "mailto:hifjur@khtrading.ca?subject=" + subject + "&body=" + body;
    }
  });

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showError(field, text) {
    field.setAttribute("aria-invalid", "true");
    var err = document.createElement("p");
    err.className = "field-error";
    err.id = field.id + "-error";
    err.setAttribute("role", "alert");
    err.textContent = text;
    field.setAttribute("aria-describedby", err.id);
    field.closest(".form-group").appendChild(err);
  }

  function clearErrors(formEl) {
    formEl.querySelectorAll("[aria-invalid]").forEach(function (el) {
      el.removeAttribute("aria-invalid");
      el.removeAttribute("aria-describedby");
    });
    formEl.querySelectorAll(".field-error").forEach(function (el) {
      el.remove();
    });
  }
})();
