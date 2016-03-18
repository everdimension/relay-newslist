// Model types
export class NewsFeed {}
export class Article {}

// Mock data
const articles = [];
const articleTypes = ['worldNews', 'science', 'fiction', 'facts', 'lies'];
(function() {
  let article;
  for (var i = 0; i < 15; i++) {
    article = new Article();
    article.id = i + '';
    article.title = `Article Title ${i}`;
    article.content = 'A fractal is a never-ending pattern. Fractals are infinitely complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing feedback loop.';
    article.preview = `${article.content.slice(0, 80)}...`;
    article.type = articleTypes[i % articleTypes.length];
    articles.push(article);
  }
})();

const newsFeed = new NewsFeed();
newsFeed.id = '1';

export function getArticle(id) {
  return articles.find(a => a.id === id);
}
export function getArticles() { return articles; }
export function getNewsFeed() { return newsFeed; }
