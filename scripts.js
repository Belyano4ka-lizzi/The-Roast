document.addEventListener("DOMContentLoaded", () => { const cards = [ "Ты идешь вперед, когда другие стоят на месте!", "Твои цели — твоя игра, ты задаешь правила!", "Каждый день — твой шанс доказать себе, на что ты способна!", "Ты не просто создаешь продукты, ты меняешь реальность!", "Ты всегда найдешь нестандартное решение!", "Твоя энергия меняет мир вокруг!", "Твоя интуиция — твое главное оружие!", "Ты рождаешь идеи, которые меняют рынок!", "Ты выбираешь путь силы и знаний!", "Ты становишься той, кем всегда мечтала быть!" ];

function drawCard() {
    const card = cards[Math.floor(Math.random() * cards.length)];
    const cardElement = document.getElementById('motivation-card');
    cardElement.textContent = card;
    cardElement.style.opacity = 1;
}

// Основной контент приложения
document.getElementById("app").innerHTML = `
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
        <table>
            <thead>
                <tr>
                    <th>Книга</th>
                    <th>Прогресс</th>
                    <th>Дата начала</th>
                    <th>Дата завершения</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lean Startup</td>
                    <td><div class="progress-bar"><div class="progress-fill" style="width: 60%;"></div></div></td>
                    <td>01.05.2025</td>
                    <td>15.05.2025</td>
                </tr>
            </tbody>
        </table>
        <button>Добавить книгу</button>
    </div>

    <div class="card">
        <h2>Прогресс по курсам</h2>
        <table>
            <thead>
                <tr>
                    <th>Курс</th>
                    <th>Прогресс</th>
                    <th>Дата начала</th>
                    <th>Дата завершения</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product Management 101</td>
                    <td><div class="progress-bar"><div class="progress-fill" style="width: 30%;"></div></div></td>
                    <td>01.06.2025</td>
                    <td>30.06.2025</td>
                </tr>
            </tbody>
        </table>
        <button>Добавить курс</button>
    </div>

    <div class="card">
        <h2>Изучение продуктовых метрик</h2>
        <table>
            <thead>
                <tr>
                    <th>Метрика</th>
                    <th>Описание</th>
                    <th>Прогресс</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ARPU</td>
                    <td>Средний доход с пользователя</td>
                    <td><div class="progress-bar"><div class="progress-fill" style="width: 50%;"></div></div></td>
                </tr>
            </tbody>
        </table>
        <button>Добавить метрику</button>
    </div>

    <div class="card">
        <h2>Календарь</h2>
        <p>Здесь будет календарь с важными датами и задачами.</p>
    </div>
`;

});

