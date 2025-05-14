const toggle = document.getElementById("plumbobToggle");
const wheel = document.getElementById("actionWheel");
const links = wheel.querySelectorAll("li");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");

    const itemCount = links.length;
    const radius = 100;
    const startAngle = 90;
    const spreadAngle = 180;

    if (toggle.classList.contains("open")) {
        links.forEach((li, i) => {
            const angle = startAngle - spreadAngle / 2 + (i * spreadAngle) / (itemCount - 1);
            const radians = angle * (Math.PI / 180);
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);
            li.style.transform = `translate(${x}px, ${y}px)`;
        });
    } else {
        links.forEach(li => {
            li.style.transform = `translate(0, 0)`;
        });
    }
});
