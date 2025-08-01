# 🤖 Wordle Bot Project

An intelligent Wordle bot that uses adaptive strategy and information theory to solve Wordle puzzles.

## 📁 Project Structure

```
developer/wordle/
├── index.html          # Main application UI
├── styles.css          # Styling for the application
├── wordle-bot.js       # Core bot logic and algorithm
├── main.js            # UI interaction and game flow
├── tests.html         # Test runner interface
├── tests.js           # Comprehensive test suite
└── README.md          # This file
```

## 🚀 How to Use

### Running the Bot

1. Open `index.html` in a web browser
2. Enter a 5-letter Wordle answer in the input field
3. Click "🚀 Let Bot Solve It!" to watch the bot play
4. View the debug output to see the bot's reasoning process

### Running Tests

1. Open `tests.html` in a web browser
2. Click "🚀 Run All Tests" to execute the test suite
3. View detailed test results and debug output

## 🧠 Bot Strategy

The bot uses an adaptive strategy that:

1. **Starts optimally**: Always begins with "ADIEU" (covers 4 vowels + D)
2. **Analyzes intelligently**: Uses letter frequency and position constraints
3. **Eliminates strategically**: Picks words that eliminate the most possibilities
4. **Switches to guessing**: When few possibilities remain, guesses likely answers
5. **Learns adaptively**: Considers all green, yellow, and gray letter information

## 🔧 Technical Details

### WordleBot Class

The core `WordleBot` class handles:
- Word list management
- Knowledge state tracking (green/yellow/black letters)
- Word filtering based on constraints
- Strategic word selection
- Guess simulation and validation

### Key Methods

- `getSmartWord(attemptNum)`: Selects the best word for the given attempt
- `simulateGuess(guess, target)`: Simulates a Wordle guess result
- `updateKnowledge(guess, result)`: Updates bot knowledge from guess feedback
- `filterPossibleWords(guess, result)`: Filters word list based on new information
- `isWordConsistentWithKnowledge(word)`: Checks if a word fits known constraints

## 🧪 Testing

The test suite includes:

- **Basic functionality tests**: Word list management, reset, simulation
- **Knowledge tracking tests**: Proper constraint application
- **Filtering tests**: Word elimination logic
- **Bug reproduction tests**: Specific scenarios like the ASSAY case
- **Detailed analysis tests**: Step-by-step debugging output

## 🐛 Debugging Features

The bot includes comprehensive debugging that shows:
- Number of possible words remaining
- Active constraints (green, yellow, black letters)
- Word filtering steps
- Strategic decision reasoning
- Detailed word analysis

## 📊 Performance

The bot typically solves Wordle puzzles in 3-5 attempts using:
- Information theory for word selection
- English letter frequency analysis  
- Constraint satisfaction algorithms
- Strategic elimination vs. guessing decisions

## 🔍 Current Investigation

We're currently investigating a bug where valid words (like ASSAY) are incorrectly eliminated from the possible words list. The test suite helps isolate and debug this issue systematically. 