// Model types
export class NewsFeed {}
export class Article {}

// Mock data
const articles = [];
const articleTypes = ['worldNews', 'science', 'fiction', 'facts', 'lies'];
const texts = ['In mathematics, an invariant is a property, held by a class of mathematical objects, which remains unchanged when transformations of a certain type are applied to the objects. The particular class of objects and type of transformations are usually indicated by the context in which the term is used. For example, the area of a triangle is an invariant with respect to isometries of the Euclidean plane. The phrases "invariant under" and "invariant to" a transformation are both used. More generally, an invariant with respect to an equivalence relation is a property that is constant on each equivalence class.', 'A fractal is a never-ending pattern. Fractals are infinitely complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing feedback loop.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea vero, ab facere sint quia nostrum ducimus ipsum est, itaque culpa sed mollitia architecto reprehenderit dolores quidem suscipit ad! Unde voluptatum, numquam impedit cum perspiciatis veniam quam, magnam, ad assumenda vel officiis. Totam amet accusantium neque ipsam dolorem beatae delectus aut repudiandae omnis ullam sequi assumenda laboriosam, vero a. Eos accusantium consectetur, repellat saepe quaerat cupiditate eligendi dolorum id dolorem, nemo error odio dolores cumque officiis voluptatum. Dolorem, excepturi exercitationem!'];

//
(function() {
  let article;
  for (var i = 0; i < 15; i++) {
    article = new Article();
    article.id = i + '';
    article.title = `Article Title ${i}`;
    article.content = texts[i % texts.length];
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
