import indexPageHtml from './index.html';
import testsPageHtml from './tests.html';
import wordleBotJs from './wordle-bot.js';
import mainJs from './main.js';
import stylesCs from './styles.css';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle different routes
    switch (path) {
      case '/':
      case '/index.html':
        return new Response(indexPageHtml, {
          headers: { 'Content-Type': 'text/html;charset=UTF-8' }
        });
      
      case '/tests':
      case '/tests.html':
        return new Response(testsPageHtml, {
          headers: { 'Content-Type': 'text/html;charset=UTF-8' }
        });
      
      case '/wordle-bot.js':
        return new Response(wordleBotJs, {
          headers: { 'Content-Type': 'application/javascript;charset=UTF-8' }
        });
      
      case '/main.js':
        return new Response(mainJs, {
          headers: { 'Content-Type': 'application/javascript;charset=UTF-8' }
        });
      
      case '/styles.css':
        return new Response(stylesCs, {
          headers: { 'Content-Type': 'text/css;charset=UTF-8' }
        });
      
      default:
        return new Response('Not Found', { 
          status: 404,
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        });
    }
  }
} 