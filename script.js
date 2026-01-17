/* =========================
   SCROLL REVEAL (RUNS ONCE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        reveals.forEach(el => {
            if (el.classList.contains("active")) return;

            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    // Run on load (for hero)
    revealOnScroll();

    // Run on scroll
    window.addEventListener("scroll", revealOnScroll);

    /* =========================
       RESERVATION FORM HANDLER
    ========================= */
    const form = document.querySelector(".reservation-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = form.querySelector('input[type="text"]');
            const name = nameInput ? nameInput.value.trim() : "";

            if (!name) {
                alert("Please enter your name 🤍");
                return;
            }

            form.innerHTML = `
                <div class="success-message">
                    <h3>Reservation Confirmed ✨</h3>
                    <p>
                        Thank you <strong>${name}</strong><br>
                        We look forward to hosting you at Amouré.
                    </p>
                </div>
            `;
        });
    }
});

