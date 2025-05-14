const plumbob = document.getElementById("plumbob");
const links = document.querySelectorAll(".navbar li a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const rect = link.getBoundingClientRect();
        const navRect = link.closest(".navbar").getBoundingClientRect();
        const left = rect.left + rect.width / 2 - navRect.left;
        plumbob.style.left = `${left}px`;
    });
});
