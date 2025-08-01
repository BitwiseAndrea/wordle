// Global variables
const bot = new WordleBot();

function debugLog(message) {
    console.log(message); // Still log to console too
    const debugDiv = document.getElementById('debugOutput');
    if (debugDiv) {
        debugDiv.innerHTML += message + '<br>';
        debugDiv.scrollTop = debugDiv.scrollHeight;
    }
}

async function solveWordle() {
    const targetWord = document.getElementById('targetWord').value.toUpperCase().trim();

    if (targetWord.length !== 5 || !/^[A-Z]+$/.test(targetWord)) {
        alert('Please enter a valid 5-letter word using only letters');
        return;
    }

    // Reset bot and UI
    bot.reset();
    document.getElementById('gameBoard').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('solveBtn').disabled = true;
    document.getElementById('attempts').innerHTML = '';
    document.getElementById('debugOutput').innerHTML = '';
    document.getElementById('loadingText').style.display = 'block';

    let attempts = 0;
    let solved = false;

    for (let attempt = 1; attempt <= 6; attempt++) {
        attempts = attempt;

        // Get bot's guess
        const guess = bot.getSmartWord(attempt);
        const result = bot.simulateGuess(guess, targetWord);

        // Display the attempt
        await displayAttempt(attempt, guess, result, getWordExplanation(attempt, guess));

        // Check if solved
        if (result === 'GGGGG') {
            solved = true;
            break;
        }

        // Update bot's knowledge
        bot.updateKnowledge(guess, result);

        // Small delay for visual effect
        await new Promise(resolve => setTimeout(resolve, 800));
    }

    document.getElementById('loadingText').style.display = 'none';
    showFinalResult(solved ? attempts : 7);
    document.getElementById('solveBtn').disabled = false;
}

function getWordExplanation(attempt, word) {
    if (attempt === 1) {
        return "Starting with ADIEU - covers 4 vowels (A, I, E, U) + D";
    }

    const remaining = bot.possibleWords.length;

    if (remaining === 1) {
        return "Only one possibility left - this must be it!";
    } else if (remaining <= 3) {
        return `Best choice from ${remaining} final candidates`;
    } else if (remaining <= 8) {
        return `Smart guess from ${remaining} likely options`;
    } else if (remaining <= 20) {
        return `Intelligent choice to solve from ${remaining} possibilities`;
    } else {
        // Check if this is an elimination word (not in possible words)
        const isEliminator = !bot.possibleWords.includes(word);
        if (isEliminator) {
            return `Strategic elimination word to narrow down ${remaining} possibilities`;
        } else {
            return `Smart pick to reduce ${remaining} possibilities`;
        }
    }
}

async function displayAttempt(attemptNum, word, result, explanation) {
    const attemptsDiv = document.getElementById('attempts');

    const attemptDiv = document.createElement('div');
    attemptDiv.className = 'attempt';

    const letterBoxes = word.split('').map((letter, i) => {
        const colorClass = result[i] === 'G' ? 'green' : result[i] === 'Y' ? 'yellow' : 'gray';
        return `<span class="letter-box ${colorClass}">${letter}</span>`;
    }).join('');

    attemptDiv.innerHTML = `
<div class="attempt-number">${attemptNum}.</div>
<div class="word-display">${word}</div>
<div class="result-display">${letterBoxes}</div>
<div class="word-explanation">${explanation}</div>
`;

    attemptsDiv.appendChild(attemptDiv);

    // Animate in
    attemptDiv.style.opacity = '0';
    attemptDiv.style.transform = 'translateY(20px)';
    await new Promise(resolve => setTimeout(resolve, 100));
    attemptDiv.style.transition = 'all 0.5s ease';
    attemptDiv.style.opacity = '1';
    attemptDiv.style.transform = 'translateY(0)';
}

function showFinalResult(attempts) {
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;

    let scoreText, shareText;
    if (attempts <= 6) {
        scoreText = `🎉 Bot solved it in ${attempts} attempts!`;
        shareText = `Wordle ${dateStr} ${attempts}/6`;
    } else {
        scoreText = `😅 Bot couldn't solve it in 6 attempts`;
        shareText = `Wordle ${dateStr} X/6`;
    }

    document.getElementById('finalScore').textContent = scoreText;
    document.getElementById('shareText').textContent = shareText;
    document.getElementById('resultSection').style.display = 'block';
}

function copyToClipboard() {
    const shareText = document.getElementById('shareText').textContent;
    navigator.clipboard.writeText(shareText).then(() => {
        alert('Result copied to clipboard! 📋\nNow you can paste it in your group chat.');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Result copied to clipboard! 📋');
    });
}

function resetGame() {
    document.getElementById('targetWord').value = '';
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('solveBtn').disabled = false;
    document.getElementById('targetWord').focus();
}

// Auto-focus input on load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('targetWord').focus();
}); 