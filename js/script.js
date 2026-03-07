// DOM 元素獲取
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const searchInput = document.getElementById('search-input');
const subjectFilter = document.getElementById('subject-filter');
const startQuizButton = document.getElementById('start-quiz-btn');
const filterContainer = document.getElementById('filter-container');
const progressButton = document.getElementById('progress-btn');
const progressContainer = document.getElementById('progress-container');
const progressStats = document.getElementById('progress-stats');
const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');


// 全域變數
let allQuestions = questions;
let filteredQuestions = allQuestions;
let shuffledQuestions, currentQuestionIndex;
let score = 0;
let timer;
let timeRemaining = 30;
let wrongAnswers = [];

const MAX_RECENTLY_ASKED_QUESTIONS = 50; // 最多記錄50道最近問過的題目

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    populateSubjects();

    startQuizButton.addEventListener('click', () => {
        filterQuestions();
        startQuiz();
    });
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    progressButton.addEventListener('click', () => {
        toggleView(progressContainer);
        showProgress();
    });
});

function toggleView(viewContainer) {
    const isHidden = viewContainer.style.display === 'none';
    // Hide all main containers
    quizContainer.style.display = 'none';
    progressContainer.style.display = 'none';
    filterContainer.style.display = 'none';

    if (isHidden) {
        viewContainer.style.display = 'block';
    } else {
        // If closing the current view, show the main filter/start view
        filterContainer.style.display = 'flex';
    }
}


function populateSubjects() {
    const subjects = [...new Set(allQuestions.map(q => q.subject))];
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.innerText = subject;
        subjectFilter.appendChild(option);
    });
}




function filterQuestions() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSubject = subjectFilter.value;

    filteredQuestions = allQuestions.filter(question => {
        const subjectMatch = selectedSubject === 'all' || question.subject === selectedSubject;
        const searchMatch = question.question.toLowerCase().includes(searchTerm);
        return subjectMatch && searchMatch;
    });
}

function startQuiz() {
    filterContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    const endResult = quizContainer.querySelector('.end-result');
    if (endResult) endResult.remove();
    
    questionElement.style.display = 'block';
    answerButtonsElement.style.display = 'grid';
    timerElement.style.display = 'block';

    const recentlyAskedQuestions = JSON.parse(localStorage.getItem('recentlyAskedQuestions')) || [];

    const unaskedQuestions = filteredQuestions.filter(q => !recentlyAskedQuestions.includes(q.question));
    const askedQuestions = filteredQuestions.filter(q => recentlyAskedQuestions.includes(q.question));

    // Shuffle both arrays
    const shuffledUnasked = unaskedQuestions.sort(() => Math.random() - 0.5);
    const shuffledAsked = askedQuestions.sort(() => Math.random() - 0.5);

    let quizQuestions = shuffledUnasked.slice(0, 10);
    
    if (quizQuestions.length < 10) {
        const remainingNeeded = 10 - quizQuestions.length;
        quizQuestions = quizQuestions.concat(shuffledAsked.slice(0, remainingNeeded));
    }

    shuffledQuestions = quizQuestions; // This is the final array of questions for the quiz

    // Ensure there are always 10 questions if possible
    if (shuffledQuestions.length < 10) {
        quizContainer.style.display = 'none'; // Hide quiz
        filterContainer.style.display = 'flex'; // Show filter
        alert('當前篩選條件下無法產生10道題目。請調整篩選條件以獲得足夠的題目。'); // Inform user
        return; // Stop quiz
    }

    // 更新recentlyAskedQuestions
    const currentQuestionTexts = shuffledQuestions.map(q => q.question);
    let recentlyAsked = JSON.parse(localStorage.getItem('recentlyAskedQuestions')) || [];
    
    // Remove the questions we are about to ask from the old list to avoid duplicates and then add them to the end
    const updatedRecentlyAsked = recentlyAsked
        .filter(q => !currentQuestionTexts.includes(q))
        .concat(currentQuestionTexts);

    // 限制最近問過題目的數量
    if (updatedRecentlyAsked.length > MAX_RECENTLY_ASKED_QUESTIONS) {
        updatedRecentlyAsked = updatedRecentlyAsked.slice(updatedRecentlyAsked.length - MAX_RECENTLY_ASKED_QUESTIONS);
    }
    localStorage.setItem('recentlyAskedQuestions', JSON.stringify(updatedRecentlyAsked));

    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];

    if (shuffledQuestions.length > 0) {
        setNextQuestion();
    } else {
        noQuestionsFound();
    }
}

function noQuestionsFound() {
    resetState();
    questionElement.innerText = '找不到符合條件的新題目，請調整篩選條件或清除快取後重試。';
    timerElement.style.display = 'none';
    filterContainer.style.display = 'flex';
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        startTimer();
    } else {
        endQuiz();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    explanationContainer.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    Array.from(answerButtonsElement.children).forEach(button => {
        setButtonStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
    });

    if (correct) {
        score++;
    } else {
        wrongAnswers.push(currentQuestion);
        explanationText.innerText = currentQuestion.explanation;
        explanationContainer.style.display = 'block';
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.style.display = 'block';
    } else {
        endQuiz();
    }
    clearInterval(timer);
}

function setButtonStatusClass(button, correct) {
    clearButtonStatusClass(button);
    if (correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
}

function clearButtonStatusClass(button) {
    button.classList.remove('correct');
    button.classList.remove('wrong');
}

function startTimer() {
    timeRemaining = 30;
    timerElement.innerText = `剩餘時間: ${timeRemaining}`;
    timer = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `剩餘時間: ${timeRemaining}`;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

function timeUp() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    wrongAnswers.push(currentQuestion);
    
    Array.from(answerButtonsElement.children).forEach(button => {
        setButtonStatusClass(button, false);
        button.disabled = true;
    });
    
    explanationText.innerText = currentQuestion.explanation;
    explanationContainer.style.display = 'block';

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.style.display = 'block';
    } else {
        endQuiz();
    }
    clearInterval(timer);
}

function endQuiz() {
    clearInterval(timer);
    saveProgress();
    resetState();
    questionElement.style.display = 'none';
    answerButtonsElement.style.display = 'none';
    timerElement.style.display = 'none';
    
    const endResult = document.createElement('div');
    endResult.classList.add('end-result');
    endResult.innerHTML = `
        <h2>測驗結束！</h2>
        <p>你的分數是 ${score} / ${shuffledQuestions.length}</p>
        <button id="restart-btn">返回主頁</button>
    `;
    quizContainer.appendChild(endResult);
    
    document.getElementById('restart-btn').addEventListener('click', () => {
        quizContainer.style.display = 'none';
        filterContainer.style.display = 'flex';
    });
}

function saveProgress() {
    const progress = JSON.parse(localStorage.getItem('quizProgress')) || {};
    const subject = subjectFilter.value;
    const key = subject;

    if (!progress[key]) {
        progress[key] = { totalScore: 0, totalQuestions: 0, wrongAnswers: [] };
    }

    progress[key].totalScore += score;
    progress[key].totalQuestions += shuffledQuestions.length;
    progress[key].wrongAnswers.push(...wrongAnswers);

    progress[key].wrongAnswers = [...new Map(progress[key].wrongAnswers.map(item => [item['question'], item])).values()];

    localStorage.setItem('quizProgress', JSON.stringify(progress));
}

function showProgress() {
    const progress = JSON.parse(localStorage.getItem('quizProgress')) || {};
    progressStats.innerHTML = '';

    let totalScore = 0;
    let totalQuestions = 0;

    for (const key in progress) {
        const subject = key;
        totalScore += progress[key].totalScore;
        totalQuestions += progress[key].totalQuestions;

        const percentage = progress[key].totalQuestions > 0 ? (progress[key].totalScore / progress[key].totalQuestions * 100).toFixed(0) : 0;
        const subjectStat = document.createElement('div');
        subjectStat.innerHTML = `
            <h3>${subject === 'all' ? '總覽' : subject}</h3>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${percentage}%">${percentage}%</div>
            </div>
            <p>答對 ${progress[key].totalScore} / ${progress[key].totalQuestions} 題</p>
        `;
        progressStats.appendChild(subjectStat);
    }

    const overallPercentage = totalQuestions > 0 ? (totalScore / totalQuestions * 100).toFixed(0) : 0;
    const overallStat = document.createElement('div');
    overallStat.innerHTML = `
        <h3>總體進度</h3>
        <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${overallPercentage}%">${overallPercentage}%</div>
        </div>
        <p>總答對 ${totalScore} / ${totalQuestions} 題</p>
    `;
    progressStats.prepend(overallStat);

    const wrongAnswersContainer = document.createElement('div');
    wrongAnswersContainer.innerHTML = '<h3>錯題紀錄</h3>';
    let allWrongAnswers = [];
    for (const key in progress) {
        allWrongAnswers.push(...progress[key].wrongAnswers);
    }
    allWrongAnswers = [...new Map(allWrongAnswers.map(item => [item['question'], item])).values()];

    if (allWrongAnswers.length > 0) {
        const list = document.createElement('ul');
        allWrongAnswers.forEach(q => {
            const item = document.createElement('li');
            item.innerHTML = `${q.question} <br><em>解析：${q.explanation}</em>`;
            list.appendChild(item);
        });
        wrongAnswersContainer.appendChild(list);
    } else {
        wrongAnswersContainer.innerHTML += '<p>沒有錯題紀錄！</p>';
    }
    progressStats.appendChild(wrongAnswersContainer);
}



