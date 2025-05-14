const toggle = document.getElementById("plumbobToggle");
const wheel = document.getElementById("actionWheel");
const links = wheel.querySelectorAll("li");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");

    if (toggle.classList.contains("open")) {
        const radius = 100;
        const angleStep = (2 * Math.PI) / links.length;

        links.forEach((li, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            li.style.transform = `translate(${x}px, ${y}px)`;
        });
    } else {
        links.forEach(li => {
            li.style.transform = `translate(0, 0)`;
        });
    }
});
