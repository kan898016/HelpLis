// Copy username to clipboard
document.getElementById('copyBtn').addEventListener('click', () => {
    const username = '@wudyhg';
    navigator.clipboard.writeText(username).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;
        btn.textContent = 'Скопировано!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Не удалось скопировать: ', err);
        alert('Не удалось скопировать в буфер обмена.');
    });
});

// Simulate progress (for demo)
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progressText');
const goal = 5000;

// Let's assume a random current amount between 0 and goal for demonstration
const current = Math.floor(Math.random() * (goal + 1));
const percent = (current / goal) * 100;

// Update UI
progressBar.style.width = percent + '%';
progressText.textContent = `Собрано: ${current} / ${goal} звёзд`;
