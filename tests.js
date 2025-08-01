// Test framework
class TestFramework {
    constructor() {
        this.tests = [];
        this.results = [];
    }

    test(name, testFn) {
        this.tests.push({ name, testFn });
    }

    assertEqual(actual, expected, message = "") {
        if (actual !== expected) {
            throw new Error(`Expected ${expected}, got ${actual}. ${message}`);
        }
    }

    assertTrue(condition, message = "") {
        if (!condition) {
            throw new Error(`Expected true, got false. ${message}`);
        }
    }

    assertContains(array, item, message = "") {
        if (!array.includes(item)) {
            throw new Error(`Expected array to contain ${item}. ${message}`);
        }
    }

    async runAll() {
        this.results = [];
        const resultsDiv = document.getElementById('testResults');
        resultsDiv.innerHTML = '';

        let passed = 0;
        let failed = 0;

        for (const test of this.tests) {
            try {
                const output = [];
                
                // Capture console output for this test
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                    originalLog(...args);
                };

                await test.testFn();
                
                // Restore console.log
                console.log = originalLog;
                
                this.results.push({ name: test.name, passed: true, output: output.join('\n') });
                passed++;
                
                this.displayTestResult(test.name, true, null, output.join('\n'));
            } catch (error) {
                // Restore console.log
                console.log = console.log;
                
                this.results.push({ name: test.name, passed: false, error: error.message });
                failed++;
                
                this.displayTestResult(test.name, false, error.message);
            }
        }

        this.displaySummary(passed, failed);
    }

    displayTestResult(name, passed, error = null, output = '') {
        const resultsDiv = document.getElementById('testResults');
        
        const section = document.createElement('div');
        section.className = 'test-section';
        
        const result = document.createElement('div');
        result.className = `test-result ${passed ? 'test-pass' : 'test-fail'}`;
        result.innerHTML = `
            <strong>${passed ? '✅' : '❌'} ${name}</strong>
            ${error ? `<br><small>${error}</small>` : ''}
        `;
        
        section.appendChild(result);
        
        if (output) {
            const outputDiv = document.createElement('div');
            outputDiv.className = 'test-output';
            outputDiv.textContent = output;
            section.appendChild(outputDiv);
        }
        
        resultsDiv.appendChild(section);
    }

    displaySummary(passed, failed) {
        const summaryDiv = document.getElementById('summary');
        const total = passed + failed;
        const allPassed = failed === 0;
        
        summaryDiv.className = `summary ${allPassed ? 'pass' : 'fail'}`;
        summaryDiv.innerHTML = `
            ${allPassed ? '🎉' : '❌'} Tests Complete: ${passed}/${total} passed
            ${failed > 0 ? `<br>${failed} test(s) failed` : ''}
        `;
        summaryDiv.style.display = 'block';
    }
}

// Test suite
const testFramework = new TestFramework();

// Basic functionality tests
testFramework.test("Bot starts with correct number of words", () => {
    const bot = new WordleBot();
    testFramework.assertEqual(bot.possibleWords.length, bot.commonWords.length);
    testFramework.assertTrue(bot.possibleWords.length > 1000, "Should have many words initially");
});

testFramework.test("Bot resets properly", () => {
    const bot = new WordleBot();
    // Modify state
    bot.possibleWords = ["TEST"];
    bot.knownInfo.blackLetters = ["X"];
    
    // Reset
    bot.reset();
    
    testFramework.assertEqual(bot.possibleWords.length, bot.commonWords.length);
    testFramework.assertEqual(bot.knownInfo.blackLetters.length, 0);
});

testFramework.test("Simulate guess works correctly", () => {
    const bot = new WordleBot();
    
    // Test exact match
    testFramework.assertEqual(bot.simulateGuess("CRANE", "CRANE"), "GGGGG");
    
    // Test partial match
    testFramework.assertEqual(bot.simulateGuess("ADIEU", "CRANE"), "YBBYB");
    
    // Test with repeated letters
    testFramework.assertEqual(bot.simulateGuess("ABACK", "ADIEU"), "GBBBB");
});

// Critical bug tests - ASSAY scenario
testFramework.test("ASSAY should be in word list", () => {
    const bot = new WordleBot();
    testFramework.assertContains(bot.commonWords, "ASSAY", "ASSAY should be in the word list");
    testFramework.assertContains(bot.possibleWords, "ASSAY", "ASSAY should be in possible words initially");
});

testFramework.test("ASSAY scenario - first guess ADIEU", () => {
    const bot = new WordleBot();
    const guess = "ADIEU";
    const target = "ASSAY";
    const result = bot.simulateGuess(guess, target);
    
    console.log(`Testing: ${guess} -> ${target} = ${result}`);
    testFramework.assertEqual(result, "GBBBB", "ADIEU vs ASSAY should be GBBBB");
    
    // Update knowledge
    bot.updateKnowledge(guess, result);
    
    // ASSAY should still be possible
    testFramework.assertContains(bot.possibleWords, "ASSAY", "ASSAY should remain after ADIEU guess");
    
    console.log(`Remaining words after ADIEU: ${bot.possibleWords.length}`);
    console.log(`First 10: ${bot.possibleWords.slice(0, 10).join(', ')}`);
});

testFramework.test("Knowledge update works correctly", () => {
    const bot = new WordleBot();
    bot.updateKnowledge("ADIEU", "GBBBB");
    
    // Should know A is in position 1
    testFramework.assertEqual(bot.knownInfo.greenLetters[1], "A");
    
    // Should know D, I, E, U are not in the word
    testFramework.assertContains(bot.knownInfo.blackLetters, "D");
    testFramework.assertContains(bot.knownInfo.blackLetters, "I");
    testFramework.assertContains(bot.knownInfo.blackLetters, "E");
    testFramework.assertContains(bot.knownInfo.blackLetters, "U");
});

testFramework.test("Word consistency check works", () => {
    const bot = new WordleBot();
    
    // Set up some known info from ADIEU -> ASSAY scenario
    bot.knownInfo.greenLetters = { 1: "A" };
    bot.knownInfo.blackLetters = ["D", "I", "E", "U"];
    
    // ASSAY should be consistent (starts with A, doesn't contain D/I/E/U)
    testFramework.assertTrue(bot.isWordConsistentWithKnowledge("ASSAY"), "ASSAY should be consistent with A____ pattern, no D/I/E/U");
});

testFramework.test("Word filtering works step by step", () => {
    const bot = new WordleBot();
    const initialCount = bot.possibleWords.length;
    
    console.log(`Starting with ${initialCount} words`);
    console.log(`ASSAY in initial list: ${bot.possibleWords.includes("ASSAY")}`);
    
    // Test the ADIEU -> ASSAY scenario step by step
    const guess = "ADIEU";
    const target = "ASSAY";
    const result = bot.simulateGuess(guess, target);
    
    console.log(`Guess: ${guess}, Target: ${target}, Result: ${result}`);
    
    // Check if ASSAY passes the isWordPossible test
    const assayPossible = bot.isWordPossible("ASSAY", guess, result);
    console.log(`ASSAY passes isWordPossible: ${assayPossible}`);
    
    // Update knowledge and filter
    bot.updateKnowledge(guess, result);
    
    console.log(`After filtering: ${bot.possibleWords.length} words remaining`);
    console.log(`ASSAY survived: ${bot.possibleWords.includes("ASSAY")}`);
    
    testFramework.assertContains(bot.possibleWords, "ASSAY", "ASSAY should survive the filtering");
});

testFramework.test("Detailed ASSAY analysis", () => {
    const bot = new WordleBot();
    
    // Let's trace exactly what happens with ASSAY
    console.log("=== DETAILED ASSAY ANALYSIS ===");
    
    const guess = "ADIEU";
    const target = "ASSAY"; 
    const result = bot.simulateGuess(guess, target);
    
    console.log(`Guess: ${guess}`);
    console.log(`Target: ${target}`);
    console.log(`Result: ${result}`);
    
    // Check each letter of the result
    for (let i = 0; i < 5; i++) {
        const guessLetter = guess[i];
        const targetLetter = target[i];
        const resultLetter = result[i];
        console.log(`Position ${i + 1}: ${guessLetter} vs ${targetLetter} = ${resultLetter}`);
    }
    
    // Now test if ASSAY would pass the filtering
    const passes = bot.isWordPossible("ASSAY", guess, result);
    console.log(`ASSAY passes isWordPossible: ${passes}`);
    
    // Test each position manually
    for (let i = 0; i < 5; i++) {
        const guessChar = guess[i];
        const resultChar = result[i];
        const wordChar = target[i];
        
        console.log(`Testing position ${i + 1}: guess=${guessChar}, result=${resultChar}, word=${wordChar}`);
        
        if (resultChar === 'G') {
            const match = wordChar === guessChar;
            console.log(`  Green check: ${match ? 'PASS' : 'FAIL'}`);
        } else if (resultChar === 'Y') {
            const hasLetter = target.includes(guessChar);
            const samePosition = wordChar === guessChar;
            console.log(`  Yellow check: hasLetter=${hasLetter}, samePosition=${samePosition}`);
        } else if (resultChar === 'B') {
            const hasLetter = target.includes(guessChar);
            console.log(`  Black check: hasLetter=${hasLetter} (should be false)`);
        }
    }
});

// Helper functions for the test runner
function runAllTests() {
    testFramework.runAll();
}

function clearResults() {
    document.getElementById('testResults').innerHTML = '';
    document.getElementById('summary').style.display = 'none';
} 