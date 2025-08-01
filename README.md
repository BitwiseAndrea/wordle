# 🤖 Wordle Bot Project

An intelligent Wordle bot that uses adaptive strategy and information theory to solve Wordle puzzles.

## Testing

### Running Tests

The project includes a comprehensive test suite that validates the bot's functionality, including the critical ASSAY scenario that was previously failing.

**Option 1: Using npm (Recommended)**
```bash
npm test
```

**Option 2: Direct browser testing**
```bash
npm run test:browser
# Or manually open tests.html in your browser
```

### What the tests cover

✅ **Bot initialization** - Ensures the word list is properly loaded  
✅ **Word list integrity** - Validates ASSAY and other critical words are present  
✅ **Guess simulation** - Tests the core Wordle simulation logic  
✅ **Knowledge tracking** - Verifies green/yellow/black letter tracking  
✅ **Word filtering** - Ensures words are properly eliminated after guesses  
✅ **ASSAY scenario** - The critical test case that validates the bot handles this word correctly  

### Recent Fixes

- **Case sensitivity fix**: Converted all words to uppercase to ensure consistency between the word list and test expectations
- **ASSAY scenario**: Fixed the bug where ASSAY was not being properly recognized in the word list

All tests should now pass! 🎉

## 🚀 Cloudflare Workers Deployment

This project includes a Cloudflare Worker setup for easy deployment to the edge!

### Quick Deployment

1. **Install Wrangler CLI** (if you haven't already):
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy to production**:
   ```bash
   npm run deploy
   # or
   wrangler deploy
   ```

4. **Deploy to dev environment**:
   ```bash
   npm run deploy:dev
   ```

### Local Development

Run the worker locally:
```bash
npm run dev
# or
wrangler dev
```

### Available Routes

- `/` - Full Wordle Bot application (serves `index.html`)
- `/tests` - Complete test suite 
- `/styles.css`, `/wordle-bot.js`, `/main.js` - Individual assets

### Worker Features

✅ **Clean architecture** - Separate HTML, CSS, and JS files  
✅ **Fast edge deployment** - Runs on Cloudflare's global network  
✅ **Multiple routes** - Main app and test suite  
✅ **Import-based assets** - Clean file organization with imports  
✅ **Same functionality** - Full WordleBot with all fixes included  
✅ **Easy maintenance** - Modular file structure  

The worker uses modern import syntax to serve separate HTML files, making the code much cleaner and easier to maintain!

## 📁 Project Structure

```
developer/wordle/
├── index.html          # Main application UI (✅ Works locally & in worker!)
├── tests.html          # Test page for Cloudflare Worker (Updated!)
├── styles.css          # Styling for the application (Enhanced!)
├── wordle-bot.js       # Core bot logic and algorithm (✅ Fixed!)
├── main.js            # UI interaction and game flow
├── tests.js           # Comprehensive test suite (✅ All passing!)
├── worker.js          # Clean Cloudflare Worker with imports (NEW!)
├── wrangler.toml      # Worker configuration with file rules (NEW!)
├── run-tests.sh       # Test runner script
├── package.json       # Dependencies and scripts
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