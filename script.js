document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const isExpanded = header.getAttribute("aria-expanded") === "true";
            const accordionBody = header.nextElementSibling;

            // Close all open accordions
            document.querySelectorAll(".accordion-header").forEach((h) => {
                h.setAttribute("aria-expanded", "false");
                h.nextElementSibling.classList.remove("is-visible");
            });

            // Toggle the clicked accordion
            if (!isExpanded) {
                header.setAttribute("aria-expanded", "true");
                accordionBody.classList.add("is-visible");
            }
        });
    });
});
