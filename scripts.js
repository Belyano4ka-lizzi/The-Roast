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
        cardElement.style.opacity = 1;
    }

    document.getElementById("app").innerHTML = `
        <div class="container">
            <div class="card">
                <h2>Основные шаги для достижения цели</h2>
                <ul>
                    <li>Подача на программу The Roast в августе 2025 года</li>
                    <li>Изучение необходимых метрик</li>
                    <li>Прочтение необходимых книг</li>
                    <li>Прохождение курсов</li>
                </ul>
            </div>

            <div class="card">
                <h2>Мотивационные карточки</h2>
                <button onclick="drawCard()">Тянуть карту</button>
                <p id="motivation-card" class="motivation-card"></p>
            </div>

            <div class="card">
                <h2>Прогресс по книгам</h2>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 40%;"></div>
                </div>
                <button>Добавить книгу</button>
            </div>

            <div class="card">
                <h2>Прогресс по курсам</h2>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 20%;"></div>
                </div>
                <button>Добавить курс</button>
            </div>

            <div class="card">
                <h2>Изучение продуктовых метрик</h2>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 60%;"></div>
                </div>
                <button>Добавить метрику</button>
            </div>
        </div>
    `;
});
