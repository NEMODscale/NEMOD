const toggle = document.getElementById("plumbobToggle");
const wheel = document.getElementById("actionWheel");
const links = wheel.querySelectorAll("li");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");

    const itemCount = links.length;
    const radius = 100;
    const arcSpan = 180; // how wide the semicircle is
    const startAngle = 270 - arcSpan / 2; // center around 270° (downward)

    if (toggle.classList.contains("open")) {
        links.forEach((li, i) => {
            const angle = startAngle + (arcSpan * i) / (itemCount - 1);
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
