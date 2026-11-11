// Configuración del Tablero (Casillas especiales: Serpientes y Escaleras)
const boardSpecialCells = {
    4: { type: 'ladder', target: 11, label: '🪜 Sube a la 11' },
    8: { type: 'ladder', target: 15, label: '🪜 Sube a la 15' },
    12: { type: 'snake', target: 5, label: '🐍 Cae a la 5' },
    17: { type: 'ladder', target: 22, label: '🪜 Sube a la 22' },
    20: { type: 'snake', target: 9, label: '🐍 Cae a la 9' },
    24: { type: 'snake', target: 13, label: '🐍 Cae a la 13' }
};

// Banco Ampliado de Preguntas Pedagógicas (Ekman/Goleman)
const questionBank = [
    {
        category: "Alfabetización Emocional",
        text: "Mañana entregas un examen. Tu corazón late rápido y sientes un nudo en el estómago. ¿Qué emoción sientes?",
        options: [
            { text: "A) Ira o Rabia", correct: false },
            { text: "B) Ansiedad / Nerviosismo", correct: true },
            { text: "C) Aburrimiento", correct: false }
        ],
        feedbackCorrect: "¡Muy bien! Reconocer los síntomas del cuerpo te ayuda a identificar la ansiedad.",
        feedbackIncorrect: "El corazón acelerado y el nudo en el estómago son síntomas claros de nerviosismo o ansiedad."
    },
    {
        category: "Alfabetización Emocional",
        text: "Tu amigo juega con otro grupo sin ti. Sientes molestia y tristeza. ¿Qué emoción es?",
        options: [
            { text: "A) Celos / Sentirse excluido", correct: true },
            { text: "B) Entusiasmo", correct: false },
            { text: "C) Culpa", correct: false }
        ],
        feedbackCorrect: "¡Excelente! Ponerle nombre a la exclusión te ayuda a expresarte asertivamente.",
        feedbackIncorrect: "Sentir molestia y tristeza en ese contexto se llama celos o sentirse excluido."
    },
    {
        category: "Alfabetización Emocional",
        text: "Llevas media hora haciendo un ejercicio difícil y no sale, sientes ganas de gritar. ¿Qué sientes?",
        options: [
            { text: "A) Frustración", correct: true },
            { text: "B) Alegría", correct: false },
            { text: "C) Vergüenza", correct: false }
        ],
        feedbackCorrect: "¡Correcto! La frustración aparece al bloquearse una meta. Reconocerla evita impulsos destructivos.",
        feedbackIncorrect: "Esa sensación al intentar algo sin éxito se llama frustración."
    },
    {
        category: "Autorregulación",
        text: "Un compañero comete un error en el partido y pierden. Sientes mucha rabia. ¿Qué haces?",
        options: [
            { text: "A) Gritarle para que ponga atención.", correct: false },
            { text: "B) Respirar 5 segundos y decir: 'En la próxima nos recuperamos'.", correct: true },
            { text: "C) Irte del juego enojado.", correct: false }
        ],
        feedbackCorrect: "¡Gran autorregulación! Respirar ayuda a mantener la calma y cuidar la amistad.",
        feedbackIncorrect: "Gritar solo crea más tensión. Respirar 5 segundos ayuda a calmar la rabia impulsiva."
    },
    {
        category: "Reencuadre Cognitivo",
        text: "Pensamiento: 'Me voy a equivocar al hablar en público y se reirán'. ¿Cómo lo cambias?",
        options: [
            { text: "A) 'Mejor me hago el enfermo'.", correct: false },
            { text: "B) 'Estoy preparado. Si me equivoco es normal y puedo seguir'.", correct: true },
            { text: "C) 'Nadie me quiere escuchar'.", correct: false }
        ],
        feedbackCorrect: "¡Excelente reencuadre! Cambiaste un pensamiento limitante por uno resiliente.",
        feedbackIncorrect: "El reencuadre busca transformar el miedo en una afirmación positiva y realista."
    },
    {
        category: "Búsqueda de Ayuda",
        text: "Llevas días abrumado y tus propias estrategias no funcionan. ¿Qué es lo correcto?",
        options: [
            { text: "A) Quedarte callado hasta que pase.", correct: false },
            { text: "B) Decirle a un adulto de confianza: 'No me siento bien y necesito ayuda'.", correct: true },
            { text: "C) Aislarte por completo.", correct: false }
        ],
        feedbackCorrect: "¡Exacto! Buscar ayuda en un adulto de confianza muestra madurez y valentía.",
        feedbackIncorrect: "Quedarte callado prolonga el malestar. Buscar apoyo en un adulto es seguro."
    },
    {
        category: "Empatía Colectiva",
        text: "Un compañero está triste en el recreo por una mala nota. ¿Cómo respondes?",
        options: [
            { text: "A) Decirle que debió estudiar más.", correct: false },
            { text: "B) Decirle en privado: 'Si necesitas hablar o estar acompañado, aquí estoy'.", correct: true },
            { text: "C) Ignorarlo para no meterte en líos.", correct: false }
        ],
        feedbackCorrect: "¡Hermosa empatía! Acompañar a otros fortalece la amistad y la comunidad.",
        feedbackIncorrect: "La empatía consiste en ofrecer apoyo y comprensión respetuosa en momentos difíciles."
    },
    {
        category: "Autorregulación",
        text: "Te rompen sin querer tu dibujo favorito. Sientes mucha tristeza y ganas de llorar. ¿Qué haces?",
        options: [
            { text: "A) Romper los útiles del otro compañero.", correct: false },
            { text: "B) Validar tu dolor, llorar o respirar y pedir que te ayuden a solucionarlo.", correct: true },
            { text: "C) Aguantarte el llanto y guardar el enojo.", correct: false }
        ],
        feedbackCorrect: "¡Excelente! Llorar o validar la tristeza es saludable para procesar el dolor.",
        feedbackIncorrect: "Desquitarse o reprimir causa más daño. Expresar lo que sientes limpia la emoción."
    }
];

// Configuración de Jugadores
const playerColors = [
    { name: 'Jugador 1', hex: '#e74c3c', class: 'token-p1' },
    { name: 'Jugador 2', hex: '#3498db', class: 'token-p2' },
    { name: 'Jugador 3', hex: '#2ecc71', class: 'token-p3' },
    { name: 'Jugador 4', hex: '#f1c40f', class: 'token-p4' }
];

// Estado Global
let players = [];
let currentTurnIndex = 0;
let isDiceRolled = false;
let pendingMove = 0;
let availableQuestions = [];

// Elementos DOM
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

const numPlayersSelect = document.getElementById('num-players-select');
const btnStart = document.getElementById('btn-start');
const btnRoll = document.getElementById('btn-roll');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const boardEl = document.getElementById('board');
const currentPlayerName = document.getElementById('current-player-name');
const playersScoresBar = document.getElementById('players-scores-bar');
const winnerAnnouncement = document.getElementById('winner-announcement');
const finalScoreboard = document.getElementById('final-scoreboard');

const flatDice = document.getElementById('flat-dice');
const diceInstruction = document.getElementById('dice-instruction');
const questionBox = document.getElementById('question-box');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const feedbackModal = document.getElementById('feedback-modal');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackMovement = document.getElementById('feedback-movement');

// Eventos
btnStart.addEventListener('click', startGame);
btnRoll.addEventListener('click', rollDice);
btnNext.addEventListener('click', closeModal);
btnRestart.addEventListener('click', restartGame);

function startGame() {
    const numPlayers = parseInt(numPlayersSelect.value);
    players = [];
    
    for (let i = 0; i < numPlayers; i++) {
        players.push({
            id: i,
            name: playerColors[i].name,
            color: playerColors[i].hex,
            cssClass: playerColors[i].class,
            position: 1,
            score: 0
        });
    }

    currentTurnIndex = 0;
    availableQuestions = [...questionBank];

    welcomeScreen.classList.remove('active');
    gameScreen.classList.add('active');

    createBoard();
    updateUI();
}

function createBoard() {
    boardEl.innerHTML = '';
    const cellsOrder = [
        21, 22, 23, 24, 25,
        20, 19, 18, 17, 16,
        11, 12, 13, 14, 15,
        10, 9,  8,  7,  6,
        1,  2,  3,  4,  5
    ];

    cellsOrder.forEach(num => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${num}`;

        let icon = '';
        if (num === 1) { cell.classList.add('start'); icon = '🚩 Inicio'; }
        else if (num === 25) { cell.classList.add('meta'); icon = '🏆 Meta'; }
        else if (boardSpecialCells[num]) {
            const spec = boardSpecialCells[num];
            cell.classList.add(spec.type);
            icon = spec.type === 'ladder' ? '🪜' : '🐍';
        }

        cell.innerHTML = `
            <span class="cell-num">${num}</span>
            <span class="cell-icon">${icon}</span>
            <div class="tokens-container" id="tokens-cell-${num}"></div>
        `;
        boardEl.appendChild(cell);
    });

    renderTokens();
}

function renderTokens() {
    for (let i = 1; i <= 25; i++) {
        const container = document.getElementById(`tokens-cell-${i}`);
        if (container) {
            container.innerHTML = '';
        }
    }

    players.forEach(player => {
        const container = document.getElementById(`tokens-cell-${player.position}`);
        if (container) {
            const token = document.createElement('div');
            token.className = `player-token ${player.cssClass}`;
            token.title = `${player.name} (Casilla ${player.position})`;
            container.appendChild(token);
        }
    });
}

function updateUI() {
    const activePlayer = players[currentTurnIndex];
    currentPlayerName.textContent = activePlayer.name;
    currentPlayerName.style.backgroundColor = activePlayer.color;

    playersScoresBar.innerHTML = '';
    players.forEach(p => {
        const tag = document.createElement('div');
        tag.className = 'p-score-tag';
        tag.style.backgroundColor = p.color;
        tag.textContent = `${p.name}: Casilla ${p.position} (${p.score} pts)`;
        playersScoresBar.appendChild(tag);
    });

    renderTokens();
}

function rollDice() {
    if (isDiceRolled) return;
    btnRoll.disabled = true;

    const rolled = Math.floor(Math.random() * 6) + 1;
    pendingMove = rolled;

    // Animación de giro del dado plano
    flatDice.classList.add('rolling');

    setTimeout(() => {
        flatDice.classList.remove('rolling');
        // Cambiar la clase para mostrar la cara correspondiente (puntos)
        flatDice.className = `flat-dice face-${rolled}`;

        const activePlayer = players[currentTurnIndex];
        diceInstruction.textContent = `${activePlayer.name} sacó un ${rolled}. ¡Responde para validar tu avance!`;
        showRandomQuestion();
        isDiceRolled = true;
    }, 600);
}

function getRandomQuestion() {
    if (availableQuestions.length === 0) {
        availableQuestions = [...questionBank];
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    availableQuestions.splice(randomIndex, 1);
    return selectedQuestion;
}

function showRandomQuestion() {
    const q = getRandomQuestion();
    questionCategory.textContent = q.category;
    questionText.textContent = q.text;

    optionsContainer.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleAnswer(opt, q));
        optionsContainer.appendChild(btn);
    });

    questionBox.classList.remove('hidden');
}

function handleAnswer(option, questionObj) {
    questionBox.classList.add('hidden');
    const player = players[currentTurnIndex];
    let moveMessage = "";

    // El jugador avanza siempre la cantidad del dado
    const oldPosition = player.position;
    let newPosition = Math.min(25, oldPosition + pendingMove);
    player.position = newPosition;

    if (option.correct) {
        player.score += 50;
        feedbackIcon.textContent = "🎉";
        feedbackTitle.textContent = `¡Respuesta Correcta de ${player.name}!`;
        feedbackMessage.textContent = questionObj.feedbackCorrect;
        moveMessage = `Avanzas de la casilla ${oldPosition} a la casilla ${player.position} (+50 pts).`;
    } else {
        feedbackIcon.textContent = "💡";
        feedbackTitle.textContent = `Reflexión para ${player.name}`;
        feedbackMessage.textContent = questionObj.feedbackIncorrect;
        moveMessage = `Avanzas de la casilla ${oldPosition} a la casilla ${player.position}, pero no sumaste puntos en este turno.`;
    }

    // Comprobar Serpientes o Escaleras
    if (boardSpecialCells[player.position]) {
        const spec = boardSpecialCells[player.position];
        player.position = spec.target;
        moveMessage += spec.type === 'ladder' 
            ? ` ¡Increíble! Subes por la escalera a la casilla ${player.position} 🪜` 
            : ` ¡Oh no! Caes por la serpiente a la casilla ${player.position} 🐍`;
    }

    feedbackMovement.textContent = moveMessage;
    updateUI();
    feedbackModal.classList.add('active');
}

function closeModal() {
    feedbackModal.classList.remove('active');
    
    const winner = players.find(p => p.position >= 25);
    if (winner) {
        showEndScreen(winner);
    } else {
        currentTurnIndex = (currentTurnIndex + 1) % players.length;
        btnRoll.disabled = false;
        isDiceRolled = false;
        updateUI();
        diceInstruction.textContent = `Turno de ${players[currentTurnIndex].name}. ¡Tira el dado!`;
    }
}

function showEndScreen(winner) {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');

    winnerAnnouncement.textContent = `🏆 ¡${winner.name} ha llegado a la META y gana la partida!`;
    winnerAnnouncement.style.color = winner.color;

    finalScoreboard.innerHTML = '';
    players.forEach(p => {
        const card = document.createElement('div');
        card.className = 'p-score-tag';
        card.style.backgroundColor = p.color;
        card.style.padding = '10px 20px';
        card.style.fontSize = '1.1rem';
        card.textContent = `${p.name}: ${p.score} pts (Casilla ${p.position})`;
        finalScoreboard.appendChild(card);
    });
}

function restartGame() {
    endScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}