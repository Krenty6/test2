// ========== КОНФИГУРАЦИЯ ==========
const ADMIN_PASSWORD = "dima20092013";

// ========== ДАННЫЕ ОПРОСА (20 ВОПРОСОВ) ==========
const surveyQuestions = [
    {
        id: 1,
        question: "🎄 Какие новогодние традиции вы соблюдаете в своей семье?",
        type: "checkbox",
        options: ["Украшение ёлки", "Приготовление оливье", "Просмотр 'Иронии судьбы'", "Письмо Деду Морозу", "Загадывание желаний под бой курантов", "Подарки под ёлкой", "Фейерверки", "Новогодний стол с мандаринами"],
        required: true
    },
    {
        id: 2,
        question: "🏠 Как вы планируете встретить Новый 2026 год?",
        type: "radio",
        options: ["Дома с семьей", "В гостях у друзей", "В ресторане/кафе", "На природе/за городом", "В путешествии", "На работе", "Еще не решил(а)"],
        required: true
    },
    {
        id: 3,
        question: "🎁 Какой подарок вы хотели бы получить на Новый 2026 год?",
        type: "text",
        placeholder: "Опишите подарок, который вы хотели бы получить",
        required: false
    },
    {
        id: 4,
        question: "🌈 Какие у вас ожидания от 2026 года?",
        type: "radio",
        options: ["Очень позитивные", "Скорее позитивные", "Нейтральные", "Скорее негативные", "Очень негативные", "Затрудняюсь ответить"],
        required: true
    },
    {
        id: 5,
        question: "🎬 Какой ваш любимый новогодний фильм?",
        type: "text",
        placeholder: "Название фильма",
        required: false
    },
    {
        id: 6,
        question: "😊 Какое у вас новогоднее настроение?",
        type: "select",
        options: ["Отличное, жду праздник", "Нормальное", "Слегка грустное", "Не чувствую праздничного настроения", "Затрудняюсь ответить"],
        required: true
    },
    {
        id: 7,
        question: "📍 Где вы предпочитаете отмечать Новый год?",
        type: "checkbox",
        options: ["Дома", "На даче/загородом", "В гостях у родственников", "В ресторане/кафе", "В отеле", "За границей", "На природе", "В городе на площади"],
        required: true
    },
    {
        id: 8,
        question: "⏰ Сколько времени вы обычно тратите на подготовку к Новому году?",
        type: "radio",
        options: ["Несколько дней", "Неделю", "2-3 недели", "Месяц и больше", "Практически не готовлюсь"],
        required: true
    },
    {
        id: 9,
        question: "🎅 Во сколько лет вы перестали верить в Деда Мороза?",
        type: "number",
        placeholder: "Укажите возраст (или 0, если все еще верите)",
        min: 0,
        max: 100,
        required: false
    },
    {
        id: 10,
        question: "💝 Что бы вы пожелали всем в наступающем 2026 году?",
        type: "textarea",
        placeholder: "Введите ваши пожелания",
        required: false
    },
    {
        id: 11,
        question: "🎨 Какой цвет ассоциируется у вас с Новым годом?",
        type: "radio",
        options: ["Красный", "Зеленый", "Золотой", "Серебряный", "Белый", "Синий", "Разноцветный"],
        required: true
    },
    {
        id: 12,
        question: "🔄 Вы любите дарить или получать подарки?",
        type: "radio",
        options: ["Больше люблю дарить", "Больше люблю получать", "Одинаково нравится и то, и другое", "Не люблю ни то, ни другое"],
        required: true
    },
    {
        id: 13,
        question: "🥂 Какой новогодний напиток вы предпочитаете?",
        type: "checkbox",
        options: ["Шампанское", "Глинтвейн", "Сок/морс", "Чай/кофе", "Коктейли", "Безалкогольные напитки", "Не пью напитки за новогодним столом"],
        required: true
    },
    {
        id: 14,
        question: "✨ Вы верите в новогодние чудеса?",
        type: "radio",
        options: ["Да, безусловно верю", "Скорее верю", "Не знаю", "Скорее не верю", "Абсолютно не верю"],
        required: true
    },
    {
        id: 15,
        question: "💎 Какой самый запоминающийся подарок вы получали на Новый год?",
        type: "text",
        placeholder: "Опишите самый запоминающийся подарок",
        required: false
    },
    {
        id: 16,
        question: "📅 Когда вы начинаете чувствовать новогоднее настроение?",
        type: "radio",
        options: ["В начале декабря", "В середине декабря", "В конце декабря", "Только 31 декабря", "Не чувствую вовсе"],
        required: true
    },
    {
        id: 17,
        question: "📺 Вы смотрите новогоднее обращение президента?",
        type: "radio",
        options: ["Да, обязательно", "Иногда смотрю", "Нет, не смотрю", "Не интересуюсь"],
        required: true
    },
    {
        id: 18,
        question: "🍰 Какой десерт обязательно должен быть на новогоднем столе?",
        type: "text",
        placeholder: "Название десерта",
        required: false
    },
    {
        id: 19,
        question: "🌟 Вы планируете загадать желание под бой курантов?",
        type: "radio",
        options: ["Да, обязательно", "Возможно", "Нет, не планирую", "Еще не решил(а)"],
        required: true
    },
    {
        id: 20,
        question: "❤️ Что для вас самое важное в Новом годе?",
        type: "textarea",
        placeholder: "Поделитесь своими мыслями",
        required: false
    }
];

// ========== СОСТОЯНИЕ ПРИЛОЖЕНИЯ ==========
const appState = {
    currentPage: 'register',
    currentUser: null,
    isAdmin: false,
    currentQuestionIndex: 0,
    userAnswers: {},
    adminPassword: ADMIN_PASSWORD
};

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    initEventListeners();
    loadFromLocalStorage();
    showPage(appState.currentPage);
    createSnowflakes();
    
    if (appState.currentUser && !appState.isAdmin) {
        showPage('survey');
        updateUserInfo();
        loadQuestion(appState.currentQuestionIndex);
        createQuestionNavigation();
        updateProgressBar();
    }
});

// ========== ОБРАБОТЧИКИ СОБЫТИЙ ==========
function initEventListeners() {
    // Навигация по страницам
    document.getElementById('login-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login');
        clearErrors('login');
    });
    
    document.getElementById('register-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('register');
        clearErrors('register');
    });
    
    document.getElementById('admin-login-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('admin-login');
        clearErrors('admin-login');
    });
    
    document.getElementById('back-to-login-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login');
        clearErrors('login');
    });
    
    // Кнопки действий
    document.getElementById('register-btn')?.addEventListener('click', registerUser);
    document.getElementById('login-btn')?.addEventListener('click', loginUser);
    document.getElementById('admin-login-btn')?.addEventListener('click', loginAdmin);
    document.getElementById('logout-btn')?.addEventListener('click', logoutUser);
    document.getElementById('admin-logout-btn')?.addEventListener('click', logoutAdmin);
    document.getElementById('prev-btn')?.addEventListener('click', prevQuestion);
    document.getElementById('next-btn')?.addEventListener('click', nextQuestion);
    document.getElementById('submit-survey-btn')?.addEventListener('click', submitSurvey);
    document.getElementById('back-to-survey-btn')?.addEventListener('click', () => showPage('survey'));
    document.getElementById('view-stats-btn')?.addEventListener('click', showUserStats);
    document.getElementById('back-to-main')?.addEventListener('click', () => showPage('survey'));
    document.getElementById('view-admin-from-stats')?.addEventListener('click', viewAdminFromStats);
    
    // Кнопка "Общая статистика"
    const viewAdminBtn = document.getElementById('view-admin-btn');
    if (viewAdminBtn) {
        viewAdminBtn.addEventListener('click', function() {
            showPage('admin-login');
            clearErrors('admin-login');
        });
    }
    
    // Админ-панель
    document.getElementById('refresh-data-btn')?.addEventListener('click', loadAdminData);
    document.getElementById('export-data-btn')?.addEventListener('click', exportToCSV);
    document.getElementById('change-password-btn')?.addEventListener('click', changeAdminPassword);
    document.getElementById('clear-data-btn')?.addEventListener('click', clearAllData);
    
    // Вкладки админ-панели
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Валидация форм
    document.getElementById('username')?.addEventListener('input', () => clearError('username-group'));
    document.getElementById('email')?.addEventListener('input', () => clearError('email-group'));
    document.getElementById('password')?.addEventListener('input', () => clearError('password-group'));
    document.getElementById('confirm-password')?.addEventListener('input', () => clearError('confirm-password-group'));
    document.getElementById('login-email')?.addEventListener('input', () => clearError('login-email-group'));
    document.getElementById('login-password')?.addEventListener('input', () => clearError('login-password-group'));
    document.getElementById('admin-password')?.addEventListener('input', () => clearError('admin-password-group'));
    
    // Автосохранение ответов
    document.addEventListener('change', function(e) {
        if (e.target.type === 'radio' || e.target.type === 'checkbox') {
            const questionId = e.target.name.replace('q', '');
            if (appState.currentUser) {
                saveAnswer(parseInt(questionId));
                updateQuestionNavigation();
                updateProgressBar();
            }
        }
    });
    
    document.addEventListener('input', function(e) {
        if (e.target.tagName === 'TEXTAREA' || e.target.type === 'text' || e.target.type === 'number') {
            const questionId = e.target.dataset.questionId;
            if (questionId && appState.currentUser) {
                saveAnswer(parseInt(questionId));
                updateQuestionNavigation();
                updateProgressBar();
            }
        }
    });
    
    document.addEventListener('change', function(e) {
        if (e.target.tagName === 'SELECT') {
            const questionId = e.target.dataset.questionId;
            if (questionId && appState.currentUser) {
                saveAnswer(parseInt(questionId));
                updateQuestionNavigation();
                updateProgressBar();
            }
        }
    });
}

// ========== УПРАВЛЕНИЕ СТРАНИЦАМИ ==========
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    const pageElement = document.getElementById(`${pageId}-page`);
    if (pageElement) {
        pageElement.classList.add('active');
        appState.currentPage = pageId;
        
        localStorage.setItem('currentPage', pageId);
        
        if (pageId === 'admin' && appState.isAdmin) {
            loadAdminData();
        }
    }
}

// ========== РЕГИСТРАЦИЯ И ВХОД ==========
function registerUser() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    let isValid = true;
    if (!username) { showError('username-group', 'Введите имя'); isValid = false; }
    if (!email) { showError('email-group', 'Введите email'); isValid = false; }
    else if (!isValidEmail(email)) { showError('email-group', 'Неверный email'); isValid = false; }
    if (!password || password.length < 6) { showError('password-group', 'Пароль от 6 символов'); isValid = false; }
    if (!confirmPassword || password !== confirmPassword) { showError('confirm-password-group', 'Пароли не совпадают'); isValid = false; }
    
    if (!isValid) return;
    
    const users = JSON.parse(localStorage.getItem('newYearSurveyUsers') || '[]');
    if (users.some(user => user.email === email)) {
        showError('email-group', 'Email уже зарегистрирован');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        registrationDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('newYearSurveyUsers', JSON.stringify(users));
    
    appState.currentUser = newUser;
    appState.userAnswers = {};
    saveToLocalStorage();
    
    showNotification('🎉 Регистрация успешна!', 'success');
    showPage('survey');
    updateUserInfo();
    loadQuestion(0);
    createQuestionNavigation();
    updateProgressBar();
}

function loginUser() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    if (!email) { showError('login-email-group', 'Введите email'); return; }
    if (!password) { showError('login-password-group', 'Введите пароль'); return; }
    
    const users = JSON.parse(localStorage.getItem('newYearSurveyUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        showError('login-email-group', 'Неверный email или пароль');
        showError('login-password-group', 'Неверный email или пароль');
        return;
    }
    
    appState.currentUser = user;
    
    const allAnswers = JSON.parse(localStorage.getItem('newYearSurveyAnswers') || '{}');
    if (allAnswers[user.id]) {
        appState.userAnswers = allAnswers[user.id];
        const answeredCount = Object.keys(appState.userAnswers).length;
        if (answeredCount > 0) {
            appState.currentQuestionIndex = Math.min(answeredCount, surveyQuestions.length - 1);
        }
    }
    
    saveToLocalStorage();
    showNotification(`🎄 Добро пожаловать, ${user.username}!`, 'success');
    showPage('survey');
    updateUserInfo();
    loadQuestion(appState.currentQuestionIndex);
    createQuestionNavigation();
    updateProgressBar();
}

function loginAdmin() {
    const password = document.getElementById('admin-password').value;
    
    if (!password) {
        showError('admin-password-group', 'Введите пароль');
        return;
    }
    
    if (password === appState.adminPassword) {
        appState.isAdmin = true;
        showNotification('🔐 Вы вошли как администратор', 'success');
        showPage('admin');
        loadAdminData();
    } else {
        showError('admin-password-group', 'Неверный пароль');
    }
}

function logoutUser() {
    appState.currentUser = null;
    appState.userAnswers = {};
    appState.currentQuestionIndex = 0;
    saveToLocalStorage();
    showPage('login');
    showNotification('👋 Вы вышли из системы', 'info');
}

function logoutAdmin() {
    appState.isAdmin = false;
    showPage('login');
    showNotification('🔓 Вы вышли из админ-панели', 'info');
}

// ========== УПРАВЛЕНИЕ ОПРОСОМ ==========
function loadQuestion(index) {
    if (index < 0 || index >= surveyQuestions.length) return;
    
    appState.currentQuestionIndex = index;
    const question = surveyQuestions[index];
    const container = document.getElementById('question-container');
    
    let html = `
        <div class="question-text">
            ${question.question}
            ${question.required ? '<span class="required">*</span>' : ''}
        </div>
    `;
    
    switch(question.type) {
        case 'radio':
            html += `<div class="radio-group">`;
            question.options.forEach((option, i) => {
                const optionId = `q${question.id}_option${i}`;
                const savedAnswer = appState.userAnswers[question.id];
                const isChecked = savedAnswer === option;
                
                html += `
                    <div class="radio-option">
                        <input type="radio" id="${optionId}" name="q${question.id}" value="${option}" ${isChecked ? 'checked' : ''}>
                        <label for="${optionId}">${option}</label>
                    </div>
                `;
            });
            html += `</div>`;
            break;
            
        case 'checkbox':
            html += `<div class="checkbox-group">`;
            question.options.forEach((option, i) => {
                const optionId = `q${question.id}_option${i}`;
                const savedAnswer = appState.userAnswers[question.id];
                let isChecked = false;
                
                if (Array.isArray(savedAnswer)) {
                    isChecked = savedAnswer.includes(option);
                }
                
                html += `
                    <div class="checkbox-option">
                        <input type="checkbox" id="${optionId}" name="q${question.id}" value="${option}" ${isChecked ? 'checked' : ''}>
                        <label for="${optionId}">${option}</label>
                    </div>
                `;
            });
            html += `</div>`;
            break;
            
        case 'select':
            const savedAnswer = appState.userAnswers[question.id] || '';
            html += `<select id="q${question.id}" data-question-id="${question.id}" class="form-select">`;
            html += `<option value="">Выберите вариант</option>`;
            question.options.forEach(option => {
                html += `<option value="${option}" ${savedAnswer === option ? 'selected' : ''}>${option}</option>`;
            });
            html += `</select>`;
            break;
            
        case 'textarea':
            const textValue = appState.userAnswers[question.id] || '';
            html += `<textarea id="q${question.id}" data-question-id="${question.id}" rows="4" placeholder="${question.placeholder}">${textValue}</textarea>`;
            break;
            
        case 'text':
            const textInputValue = appState.userAnswers[question.id] || '';
            html += `<input type="text" id="q${question.id}" data-question-id="${question.id}" placeholder="${question.placeholder}" value="${textInputValue}">`;
            break;
            
        case 'number':
            const numberValue = appState.userAnswers[question.id] || '';
            html += `<input type="number" id="q${question.id}" data-question-id="${question.id}" placeholder="${question.placeholder}" value="${numberValue}" min="${question.min || ''}" max="${question.max || ''}">`;
            break;
    }
    
    container.innerHTML = html;
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('total-questions').textContent = surveyQuestions.length;
    
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').style.display = index === surveyQuestions.length - 1 ? 'none' : 'inline-flex';
    document.getElementById('submit-survey-btn').style.display = index === surveyQuestions.length - 1 ? 'inline-flex' : 'none';
    
    updateQuestionNavigation();
    updateProgressBar();
}

function createQuestionNavigation() {
    const navContainer = document.getElementById('question-navigation');
    if (!navContainer) return;
    
    navContainer.innerHTML = '';
    
    surveyQuestions.forEach((question, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'question-nav-btn';
        button.textContent = question.id;
        button.dataset.index = index;
        
        button.addEventListener('click', () => {
            if (appState.currentQuestionIndex !== index) {
                saveAnswer(surveyQuestions[appState.currentQuestionIndex].id);
            }
            loadQuestion(index);
        });
        
        navContainer.appendChild(button);
    });
    
    updateQuestionNavigation();
}

function updateQuestionNavigation() {
    const buttons = document.querySelectorAll('.question-nav-btn');
    buttons.forEach((button, index) => {
        button.classList.remove('active', 'answered');
        if (index === appState.currentQuestionIndex) button.classList.add('active');
        
        const questionId = surveyQuestions[index].id;
        if (appState.userAnswers[questionId]) button.classList.add('answered');
    });
}

function updateProgressBar() {
    const answeredCount = Object.keys(appState.userAnswers).length;
    const progress = (answeredCount / surveyQuestions.length) * 100;
    document.getElementById('survey-progress').style.width = `${progress}%`;
    document.getElementById('progress-percent').textContent = `${Math.round(progress)}%`;
}

function saveAnswer(questionId) {
    const question = surveyQuestions.find(q => q.id === questionId);
    if (!question) return;
    
    let answerValue = null;
    
    switch(question.type) {
        case 'radio':
            const selectedRadio = document.querySelector(`input[name="q${questionId}"]:checked`);
            answerValue = selectedRadio ? selectedRadio.value : null;
            break;
            
        case 'checkbox':
            const checkedBoxes = document.querySelectorAll(`input[name="q${questionId}"]:checked`);
            answerValue = Array.from(checkedBoxes).map(cb => cb.value);
            break;
            
        case 'select':
            const select = document.getElementById(`q${questionId}`);
            answerValue = select.value || null;
            break;
            
        case 'textarea':
        case 'text':
        case 'number':
            const input = document.getElementById(`q${questionId}`);
            answerValue = input.value.trim() || null;
            break;
    }
    
    if (answerValue !== null && (Array.isArray(answerValue) ? answerValue.length > 0 : true)) {
        appState.userAnswers[questionId] = answerValue;
    } else {
        delete appState.userAnswers[questionId];
    }
    
    saveToLocalStorage();
}

function nextQuestion() {
    const currentQuestion = surveyQuestions[appState.currentQuestionIndex];
    if (currentQuestion.required && !appState.userAnswers[currentQuestion.id]) {
        showNotification('Пожалуйста, ответьте на этот вопрос', 'error');
        return;
    }
    
    if (appState.currentQuestionIndex < surveyQuestions.length - 1) {
        saveAnswer(currentQuestion.id);
        loadQuestion(appState.currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (appState.currentQuestionIndex > 0) {
        saveAnswer(surveyQuestions[appState.currentQuestionIndex].id);
        loadQuestion(appState.currentQuestionIndex - 1);
    }
}

function submitSurvey() {
    const currentQuestion = surveyQuestions[appState.currentQuestionIndex];
    
    if (currentQuestion.required && !appState.userAnswers[currentQuestion.id]) {
        showNotification('Пожалуйста, ответьте на этот вопрос', 'error');
        return;
    }
    
    saveAnswer(currentQuestion.id);
    
    const allAnswers = JSON.parse(localStorage.getItem('newYearSurveyAnswers') || '{}');
    allAnswers[appState.currentUser.id] = appState.userAnswers;
    localStorage.setItem('newYearSurveyAnswers', JSON.stringify(allAnswers));
    
    const completions = JSON.parse(localStorage.getItem('newYearSurveyCompletions') || '[]');
    if (!completions.some(c => c.userId === appState.currentUser.id)) {
        completions.push({
            userId: appState.currentUser.id,
            date: new Date().toISOString()
        });
        localStorage.setItem('newYearSurveyCompletions', JSON.stringify(completions));
    }
    
    createConfetti();
    showNotification('🎉 Поздравляем! Опрос завершен! Спасибо за ваши ответы и за то, что поделились новогодним настроением! ✨', 'success');
    
    setTimeout(() => {
        showPage('confirmation');
    }, 1000);
}

// ========== СТАТИСТИКА ПОЛЬЗОВАТЕЛЯ ==========
function showUserStats() {
    console.log('Показываем статистику пользователя...');
    
    const allAnswers = JSON.parse(localStorage.getItem('newYearSurveyAnswers') || '{}');
    const popularAnswers = getPopularAnswers(allAnswers);
    const matchResult = calculateMatchPercentage(appState.userAnswers, popularAnswers);
    
    const statsPage = document.getElementById('user-stats-page');
    if (!statsPage) {
        console.error('Страница статистики не найдена');
        return;
    }
    
    const matchCard = document.getElementById('match-card');
    if (matchCard) {
        const matchColor = matchResult.percentage >= 70 ? 'success' : matchResult.percentage >= 40 ? 'warning' : 'error';
        const matchText = matchResult.percentage >= 70 ? 'Высокое' : matchResult.percentage >= 40 ? 'Среднее' : 'Низкое';
        
        matchCard.innerHTML = `
            <div class="match-percentage">${matchResult.percentage}%</div>
            <div class="match-label">совпадений с другими участниками</div>
            <div class="match-details">${matchResult.matchedQuestions} из ${matchResult.totalQuestions} вопросов • ${matchText} совпадение</div>
        `;
        matchCard.className = `match-card match-${matchColor}`;
    }
    
    const personalAnswersDiv = document.getElementById('personal-answers');
    if (personalAnswersDiv) {
        let personalHTML = '';
        
        const sortedQuestionIds = Object.keys(appState.userAnswers).sort((a, b) => parseInt(a) - parseInt(b));
        
        sortedQuestionIds.forEach(questionId => {
            const answer = appState.userAnswers[questionId];
            const question = surveyQuestions.find(q => q.id == questionId);
            if (question) {
                const formattedAnswer = formatAnswer(answer, question.type);
                personalHTML += `
                    <div class="answer-item">
                        <strong>Вопрос ${questionId}:</strong> ${formattedAnswer}
                    </div>
                `;
            }
        });
        
        personalAnswersDiv.innerHTML = personalHTML || '<div class="no-answers">Нет ответов</div>';
    }
    
    const commonAnswersDiv = document.getElementById('common-answers');
    if (commonAnswersDiv) {
        let commonHTML = '';
        
        if (matchResult.matchedAnswers.length > 0) {
            matchResult.matchedAnswers.forEach(answer => {
                commonHTML += `<div class="match-item">✓ ${answer}</div>`;
            });
        } else {
            commonHTML = '<div class="no-matches">Нет совпадений с большинством</div>';
        }
        
        commonAnswersDiv.innerHTML = commonHTML;
    }
    
    showPage('user-stats');
}

function getPopularAnswers(allAnswers) {
    const answerCounts = {};
    
    surveyQuestions.forEach(question => {
        if (question.type === 'radio' || question.type === 'select' || question.type === 'checkbox') {
            answerCounts[question.id] = {};
            question.options.forEach(option => {
                answerCounts[question.id][option] = 0;
            });
        }
    });
    
    Object.values(allAnswers).forEach(userAnswers => {
        Object.entries(userAnswers).forEach(([questionId, answer]) => {
            const questionIdNum = parseInt(questionId);
            const question = surveyQuestions.find(q => q.id === questionIdNum);
            if (!question || !answerCounts[questionIdNum]) return;
            
            if (question.type === 'radio' || question.type === 'select') {
                if (typeof answer === 'string' && answerCounts[questionIdNum][answer] !== undefined) {
                    answerCounts[questionIdNum][answer]++;
                }
            } else if (question.type === 'checkbox') {
                const answers = Array.isArray(answer) ? answer : [];
                answers.forEach(ans => {
                    if (answerCounts[questionIdNum][ans] !== undefined) {
                        answerCounts[questionIdNum][ans]++;
                    }
                });
            }
        });
    });
    
    const popularAnswers = {};
    Object.entries(answerCounts).forEach(([questionId, counts]) => {
        let maxCount = 0;
        let popularAnswer = '';
        
        Object.entries(counts).forEach(([option, count]) => {
            if (count > maxCount) {
                maxCount = count;
                popularAnswer = option;
            }
        });
        
        if (popularAnswer && maxCount > 0) {
            popularAnswers[questionId] = popularAnswer;
        }
    });
    
    return popularAnswers;
}

function calculateMatchPercentage(userAnswers, popularAnswers) {
    let matchedQuestions = 0;
    let totalQuestions = 0;
    const matchedAnswers = [];
    
    Object.entries(userAnswers).forEach(([questionId, answer]) => {
        const questionIdNum = parseInt(questionId);
        const question = surveyQuestions.find(q => q.id === questionIdNum);
        if (!question || !popularAnswers[questionId]) return;
        
        totalQuestions++;
        
        if (question.type === 'radio' || question.type === 'select') {
            if (answer === popularAnswers[questionId]) {
                matchedQuestions++;
                matchedAnswers.push(`Вопрос ${questionId}`);
            }
        } else if (question.type === 'checkbox') {
            const answers = Array.isArray(answer) ? answer : [];
            if (answers.includes(popularAnswers[questionId])) {
                matchedQuestions++;
                matchedAnswers.push(`Вопрос ${questionId}`);
            }
        }
    });
    
    const percentage = totalQuestions > 0 ? Math.round((matchedQuestions / totalQuestions) * 100) : 0;
    
    return {
        percentage,
        matchedQuestions,
        totalQuestions,
        matchedAnswers
    };
}

// ========== АДМИН-ПАНЕЛЬ ==========
function loadAdminData() {
    const users = JSON.parse(localStorage.getItem('newYearSurveyUsers') || '[]');
    const allAnswers = JSON.parse(localStorage.getItem('newYearSurveyAnswers') || '{}');
    const completions = JSON.parse(localStorage.getItem('newYearSurveyCompletions') || '[]');
    
    const usersWithAnswers = Object.keys(allAnswers).length;
    const totalAnswers = Object.values(allAnswers).reduce((sum, answers) => sum + Object.keys(answers).length, 0);
    const completionRate = usersWithAnswers > 0 ? Math.round((totalAnswers / (usersWithAnswers * surveyQuestions.length)) * 100) : 0;
    
    document.getElementById('total-participants').textContent = usersWithAnswers;
    document.getElementById('total-answers').textContent = totalAnswers;
    document.getElementById('completion-rate').textContent = `${completionRate}%`;
    
    loadQuestionStats(allAnswers);
    loadResponsesTable(users, allAnswers);
    loadMatchesTable(users, allAnswers);
}

function loadQuestionStats(allAnswers) {
    const statsContainer = document.getElementById('stats-container');
    if (!statsContainer) return;
    
    const usersCount = Object.keys(allAnswers).length;
    if (usersCount === 0) {
        statsContainer.innerHTML = '<p class="no-data">Нет данных для статистики</p>';
        return;
    }
    
    let statsHTML = `
        <div class="stat-card">
            <h4><i class="fas fa-chart-pie"></i> Общая статистика</h4>
            <div class="stat-item">
                <div class="stat-label">
                    <span>Участников опроса</span>
                    <span>${usersCount}</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: 100%"></div>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-label">
                    <span>Среднее заполнение</span>
                    <span>${Math.round(Object.values(allAnswers).reduce((sum, answers) => sum + Object.keys(answers).length, 0) / usersCount)} из 20</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${(Object.values(allAnswers).reduce((sum, answers) => sum + Object.keys(answers).length, 0) / (usersCount * 20) * 100).toFixed(1)}%"></div>
                </div>
            </div>
        </div>
    `;
    
    surveyQuestions.forEach(question => {
        const answerCounts = {};
        let totalAnswersForQuestion = 0;
        
        if (question.type === 'radio' || question.type === 'select' || question.type === 'checkbox') {
            question.options.forEach(option => answerCounts[option] = 0);
            
            Object.values(allAnswers).forEach(answers => {
                const answer = answers[question.id];
                if (answer) {
                    totalAnswersForQuestion++;
                    
                    if (question.type === 'radio' || question.type === 'select') {
                        if (typeof answer === 'string' && answerCounts[answer] !== undefined) {
                            answerCounts[answer]++;
                        }
                    } else if (question.type === 'checkbox') {
                        const answerArray = Array.isArray(answer) ? answer : [];
                        answerArray.forEach(ans => {
                            if (answerCounts[ans] !== undefined) answerCounts[ans]++;
                        });
                    }
                }
            });
            
            if (totalAnswersForQuestion > 0) {
                statsHTML += `
                    <div class="stat-card">
                        <h4><i class="fas fa-question-circle"></i> Вопрос ${question.id}</h4>
                        <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">${question.question.substring(0, 80)}${question.question.length > 80 ? '...' : ''}</p>
                        <p style="font-size: 0.85rem; color: #888; margin-bottom: 20px;">Ответов: ${totalAnswersForQuestion}</p>
                `;
                
                const sortedOptions = Object.entries(answerCounts)
                    .filter(([_, count]) => count > 0)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5);
                
                sortedOptions.forEach(([option, count]) => {
                    const percentage = ((count / totalAnswersForQuestion) * 100).toFixed(1);
                    statsHTML += `
                        <div class="stat-item">
                            <div class="stat-label">
                                <span>${option}</span>
                                <span>${percentage}%</span>
                            </div>
                            <div class="stat-bar">
                                <div class="stat-fill" style="width: ${percentage}%"></div>
                            </div>
                            <div class="stat-count">${count} голосов</div>
                        </div>
                    `;
                });
                
                statsHTML += `</div>`;
            }
        }
    });
    
    statsContainer.innerHTML = statsHTML;
}

function loadResponsesTable(users, allAnswers) {
    const tableBody = document.getElementById('responses-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const completions = JSON.parse(localStorage.getItem('newYearSurveyCompletions') || '[]');
    
    completions.forEach((completion, index) => {
        const user = users.find(u => u.id === completion.userId);
        if (!user) return;
        
        const answers = allAnswers[user.id] || {};
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${user.username}</strong></td>
            <td>${user.email}</td>
            <td>${formatAnswer(answers[1], 'checkbox')}</td>
            <td>${formatAnswer(answers[2], 'radio') || '-'}</td>
            <td>${answers[3] || '-'}</td>
            <td>${formatAnswer(answers[4], 'radio') || '-'}</td>
            <td>${answers[5] || '-'}</td>
            <td>${new Date(completion.date).toLocaleDateString('ru-RU')}</td>
        `;
        tableBody.appendChild(row);
    });
    
    if (completions.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                    Нет данных об ответах
                </td>
            </tr>
        `;
    }
}

function loadMatchesTable(users, allAnswers) {
    const tableBody = document.getElementById('matches-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    const popularAnswers = getPopularAnswers(allAnswers);
    const completions = JSON.parse(localStorage.getItem('newYearSurveyCompletions') || '[]');
    
    completions.forEach(completion => {
        const user = users.find(u => u.id === completion.userId);
        if (!user) return;
        
        const answers = allAnswers[user.id] || {};
        const matchResult = calculateMatchPercentage(answers, popularAnswers);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${user.username}</strong><br><small>${user.email}</small></td>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="match-circle" style="width: 40px; height: 40px; border-radius: 50%; background: conic-gradient(#4CAF50 0% ${matchResult.percentage}%, #eee ${matchResult.percentage}% 100%); display: flex; align-items: center; justify-content: center;">
                        <span style="background: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">${matchResult.percentage}</span>
                    </div>
                    <span style="font-weight: bold; color: ${matchResult.percentage >= 70 ? '#4CAF50' : matchResult.percentage >= 40 ? '#FF9800' : '#F44336'}">${matchResult.percentage}%</span>
                </div>
            </td>
            <td>${matchResult.matchedQuestions}/${matchResult.totalQuestions}</td>
            <td>${getMatchLevel(matchResult.percentage)}</td>
            <td>${new Date(completion.date).toLocaleDateString('ru-RU')}</td>
        `;
        tableBody.appendChild(row);
    });
    
    if (completions.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-users" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                    Нет данных для сравнения
                </td>
            </tr>
        `;
    }
}

function getMatchLevel(percentage) {
    if (percentage >= 80) return '🎯 Отличное';
    if (percentage >= 60) return '👍 Хорошее';
    if (percentage >= 40) return '😐 Среднее';
    return '😕 Низкое';
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function formatAnswer(answer, type) {
    if (!answer && answer !== 0) return '-';
    
    if (typeof answer === 'string') return answer;
    
    if (type === 'checkbox') {
        if (Array.isArray(answer)) {
            return answer.slice(0, 3).join(', ') + (answer.length > 3 ? '...' : '');
        }
    }
    
    return String(answer);
}

function exportToCSV() {
    const users = JSON.parse(localStorage.getItem('newYearSurveyUsers') || '[]');
    const allAnswers = JSON.parse(localStorage.getItem('newYearSurveyAnswers') || '{}');
    const completions = JSON.parse(localStorage.getItem('newYearSurveyCompletions') || '[]');
    
    if (completions.length === 0) {
        showNotification('Нет данных для экспорта', 'error');
        return;
    }
    
    let csv = 'ID,Имя,Email,Традиции,Планы,Подарок,Ожидания,Фильм,Настроение,Место,Подготовка,Возраст ДМ,Пожелания,Цвет,Подарки,Напитки,Чудеса,Памятный подарок,Начало настроения,Обращение,Десерт,Желание,Самое важное,Дата\n';
    
    completions.forEach((completion, index) => {
        const user = users.find(u => u.id === completion.userId);
        if (!user) return;
        
        const answers = allAnswers[user.id] || {};
        const row = [
            index + 1,
            `"${user.username.replace(/"/g, '""')}"`,
            `"${user.email}"`,
            `"${formatAnswer(answers[1], 'checkbox').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[2], 'radio').replace(/"/g, '""')}"`,
            `"${(answers[3] || '').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[4], 'radio').replace(/"/g, '""')}"`,
            `"${(answers[5] || '').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[6], 'select').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[7], 'checkbox').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[8], 'radio').replace(/"/g, '""')}"`,
            `"${(answers[9] || '').toString().replace(/"/g, '""')}"`,
            `"${(answers[10] || '').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[11], 'radio').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[12], 'radio').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[13], 'checkbox').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[14], 'radio').replace(/"/g, '""')}"`,
            `"${(answers[15] || '').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[16], 'radio').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[17], 'radio').replace(/"/g, '""')}"`,
            `"${(answers[18] || '').replace(/"/g, '""')}"`,
            `"${formatAnswer(answers[19], 'radio').replace(/"/g, '""')}"`,
            `"${(answers[20] || '').replace(/"/g, '""')}"`,
            `"${new Date(completion.date).toLocaleDateString('ru-RU')}"`
        ];
        
        csv += row.join(',') + '\n';
    });
    
    const blob = new Blob(['\ufeff', csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `новогодний_опрос_${new Date().getFullYear()}_результаты.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('📊 Данные экспортированы в CSV', 'success');
}

function changeAdminPassword() {
    const currentPassword = prompt('Введите текущий пароль администратора:');
    if (!currentPassword || currentPassword !== ADMIN_PASSWORD) {
        alert('Неверный текущий пароль!');
        return;
    }
    
    const newPassword = prompt('Введите новый пароль:');
    if (!newPassword) return;
    
    const confirmPassword = prompt('Подтвердите новый пароль:');
    if (newPassword !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }
    
    appState.adminPassword = newPassword;
    alert('Пароль успешно изменен!');
}

function clearAllData() {
    if (confirm('ВНИМАНИЕ: Вы собираетесь удалить ВСЕ данные опроса!\n\nЭто действие нельзя отменить.\n\nПродолжить?')) {
        localStorage.removeItem('newYearSurveyUsers');
        localStorage.removeItem('newYearSurveyAnswers');
        localStorage.removeItem('newYearSurveyCompletions');
        localStorage.removeItem('newYearSurveyState');
        
        appState.currentUser = null;
        appState.userAnswers = {};
        appState.currentQuestionIndex = 0;
        appState.isAdmin = false;
        
        showNotification('🗑️ Все данные удалены', 'info');
        loadAdminData();
        showPage('register');
    }
}

// ========== UI ФУНКЦИИ ==========
function updateUserInfo() {
    if (appState.currentUser) {
        const currentUserElement = document.getElementById('current-user');
        if (currentUserElement) {
            currentUserElement.textContent = appState.currentUser.username;
        }
    }
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.style.display = 'block';
        
        const duration = type === 'success' && message.includes('Поздравляем') ? 6000 : 4000;
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, duration);
    }
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('has-error');
        const errorMessage = element.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }
}

function clearError(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('has-error');
    }
}

function clearErrors(pageId) {
    const page = document.getElementById(`${pageId}-page`);
    if (page) {
        page.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ========== ЛОКАЛЬНОЕ ХРАНИЛИЩЕ ==========
function saveToLocalStorage() {
    localStorage.setItem('newYearSurveyState', JSON.stringify({
        currentUser: appState.currentUser,
        currentQuestionIndex: appState.currentQuestionIndex,
        userAnswers: appState.userAnswers
    }));
}

function loadFromLocalStorage() {
    const savedState = JSON.parse(localStorage.getItem('newYearSurveyState') || '{}');
    if (savedState.currentUser) appState.currentUser = savedState.currentUser;
    if (savedState.currentQuestionIndex !== undefined) appState.currentQuestionIndex = savedState.currentQuestionIndex;
    if (savedState.userAnswers) appState.userAnswers = savedState.userAnswers;
}

// ========== АНИМАЦИИ ==========
function createSnowflakes() {
    const container = document.getElementById('snow-container');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() * 10 + 5;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.opacity = Math.random() * 0.6 + 0.3;
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(snowflake);
    }
}

function createConfetti() {
    const container = document.getElementById('snow-container');
    if (!container) return;
    
    const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = `${Math.random() * 15 + 5}px`;
        confetti.style.height = `${Math.random() * 15 + 5}px`;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-50px';
        confetti.style.opacity = Math.random() * 0.7 + 0.3;
        confetti.style.zIndex = '9999';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: confetti.style.opacity },
            { transform: `translate(${Math.random() * 100 - 50}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// ========== НАВИГАЦИЯ ==========
function viewAdminFromStats() {
    showPage('admin-login');
    clearErrors('admin-login');
}