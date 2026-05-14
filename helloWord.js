// Проверяем, есть ли пользователь в localStorage
const email = localStorage.getItem('userEmail');
const emailDisplay = document.getElementById('userEmailDisplay');

if(email) {
    emailDisplay.textContent = `Вы вошли как: ${email}`;
} else {
    window.location.href = 'login.html';
}

// Анимация круга и цифровой таймер
const circle = document.querySelector('.loader-circle');
const timerText = document.getElementById('timerText');

const totalTime = 5000; // 5 секунд
const intervalTime = 50; // обновление каждые 50мс
const steps = totalTime / intervalTime;
const dashOffsetMax = 339.292;
let currentStep = 0;

const timer = setInterval(() => {
    currentStep++;
    const progress = currentStep / steps;
    circle.style.strokeDashoffset = dashOffsetMax * (1 - progress);

    // Обновление цифрового таймера
    const secondsLeft = Math.ceil((totalTime - currentStep * intervalTime) / 1000);
    timerText.textContent = secondsLeft;

    if(currentStep >= steps) {
        clearInterval(timer);
        window.location.href = 'str1.html';
    }
}, intervalTime);