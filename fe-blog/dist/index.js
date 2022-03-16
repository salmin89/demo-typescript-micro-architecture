var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const appDiv = document.getElementById('app');
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://localhost:3001/posts');
    const data = yield response.json();
    return data;
});
const renderPosts = (posts) => {
    appDiv.innerHTML = `
  <ul>
  ${posts.data
        .map((post) => `
      <li>${post.title} (${post.content})
        <ul>
          ${post.tags.map((tag) => `<li style="color: ${tag.color}">#${tag.label}</li>`).join('')}
        </ul>
      </li>
    `)
        .join('<br />')}
  </ul>`;
};
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield getAllPosts();
    renderPosts(posts);
});
run();
export {};
