
document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        "Ты идешь вперед, когда другие стоят на месте!",
        "Твои цели — твоя игра, ты задаешь правила!",
        "Каждый день — твой шанс доказать себе, на что ты способна!",
        "Ты не просто создаешь продукты, ты меняешь реальность!",
        "Ты всегда найдешь нестандартное решение!",
        "Твоя энергия меняет мир вокруг!",
        "Твоя интуиция — твое главное оружие!",
        "Ты рождаешь идеи, которые меняют рынок!",
        "Ты выбираешь путь силы и знаний!",
        "Ты становишься той, кем всегда мечтала быть!"
    ];

    function drawCard() {
        const card = cards[Math.floor(Math.random() * cards.length)];
        const cardElement = document.getElementById('motivation-card');
        cardElement.textContent = card;
        cardElement.style.opacity = 0;
        setTimeout(() => {
            cardElement.style.opacity = 1;
        }, 100);
    }

    window.addEventListener('scroll', () => {
        document.querySelectorAll('.reveal-card').forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 100) {
                card.classList.add('animate-slide-in');
            }
        });
    });

    document.getElementById("app").innerHTML = `
        <h1 class="glow-text">The Roast Goal Planner</h1>
        <button onclick="drawCard()" class="glow-text">Тянуть карту</button>
        <p id="motivation-card" class="glow-text"></p>
    `;
});
