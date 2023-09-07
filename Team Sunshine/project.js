document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validation code
        const firstName = form.querySelector("#first_name").value.trim();
        const lastName = form.querySelector("#last_name").value.trim();
        const phone = form.querySelector("#phone").value.trim();
        const email = form.querySelector("#email").value.trim();

        if (firstName === "" || lastName === "" || phone === "" || email === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidPhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        window.location.href = window.location.href;        
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number format
    function isValidPhone(phone) {
        // Assuming a simple validation for a 10-digit phone number
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
});