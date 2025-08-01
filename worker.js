// Simple proxy to serve files from GitHub
const GITHUB_BASE = 'https://raw.githubusercontent.com/BitwiseAndrea/wordle/refs/heads/main/';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle different routes by proxying to GitHub
    switch (path) {
      case '/':
      case '/index.html':
        const indexResponse = await fetch(GITHUB_BASE + 'index.html');
        const indexHtml = await indexResponse.text();
        return new Response(indexHtml, {
          headers: { 'Content-Type': 'text/html;charset=UTF-8' }
        });
      
      case '/tests':
      case '/tests.html':
        const testsResponse = await fetch(GITHUB_BASE + 'tests.html');
        const testsHtml = await testsResponse.text();
        return new Response(testsHtml, {
          headers: { 'Content-Type': 'text/html;charset=UTF-8' }
        });
      
      case '/wordle-bot.js':
        const botResponse = await fetch(GITHUB_BASE + 'wordle-bot.js');
        return new Response(await botResponse.text(), {
          headers: { 'Content-Type': 'application/javascript;charset=UTF-8' }
        });
      
      case '/main.js':
        const mainResponse = await fetch(GITHUB_BASE + 'main.js');
        return new Response(await mainResponse.text(), {
          headers: { 'Content-Type': 'application/javascript;charset=UTF-8' }
        });
      
      case '/styles.css':
        const stylesResponse = await fetch(GITHUB_BASE + 'styles.css');
        return new Response(await stylesResponse.text(), {
          headers: { 'Content-Type': 'text/css;charset=UTF-8' }
        });
      
      case '/tests.js':
        const testsJsResponse = await fetch(GITHUB_BASE + 'tests.js');
        return new Response(await testsJsResponse.text(), {
          headers: { 'Content-Type': 'application/javascript;charset=UTF-8' }
        });
      
      default:
        return new Response('Not Found', { 
          status: 404,
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        });
    }
  }
} 