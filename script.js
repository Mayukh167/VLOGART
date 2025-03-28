document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const loginForm = document.getElementById("loginForm");
    const passwordInput = document.getElementById("password");
    const blogContainer = document.getElementById("blog-container");
    const introText = "Welcome to the Premium Vlog Platform";
    const introElement = document.getElementById("intro");

    let i = 0;
    function typeWriter() {
        if (i < introText.length) {
            introElement.textContent += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (passwordInput.value === "writerpass") {
            alert("Login successful");
            blogContainer.innerHTML += "<p>Welcome, Writer! You can now post blogs.</p>";
        } else {
            alert("Incorrect password");
        }
    });
});
