document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dynamic Star Wars crawl effect
    const crawlContainer = document.createElement("div");
    crawlContainer.classList.add("starwars-crawl");
    crawlContainer.innerHTML = `
        <div class="crawl">
            <p>Willkommen auf meiner Star Wars Seite!</p>
            <p>Erkunde die Galaxie und entdecke neue Inhalte.</p>
            <p>Möge die Macht mit dir sein!</p>
        </div>
    `;
    document.body.appendChild(crawlContainer);
    
    // Add smooth fade-in effect
    document.body.classList.add("fade-in");

    // Light Saber cursor effect
    document.addEventListener("mousemove", (e) => {
        let saber = document.querySelector(".lightsaber");
        if (!saber) {
            saber = document.createElement("div");
            saber.classList.add("lightsaber");
            document.body.appendChild(saber);
        }
        saber.style.left = `${e.clientX}px`;
        saber.style.top = `${e.clientY}px`;
    });
});
