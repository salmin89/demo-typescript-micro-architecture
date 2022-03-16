import { IResponse } from 'shared-types/src/shared/response.interface';
import { IPost } from 'shared-types/src/models/posts/post.models';

const appDiv: HTMLElement = document.getElementById('app');

const getAllPosts = async (): Promise<IResponse<IPost[]>> => {
  const response = await fetch('http://localhost:3001/posts');
  const data = await response.json();
  return data;
};

const renderPosts = (posts: IResponse<IPost[]>) => {
  appDiv.innerHTML = `
  <ul>
  ${posts.data
    .map(
      (post) => `
      <li>${post.title} (${post.content})
        <ul>
          ${post.tags.map((tag) => `<li style="color: ${tag.color}">#${tag.label}</li>`).join('')}
        </ul>
      </li>
    `
    )
    .join('<br />')}
  </ul>`;
};

const run = async () => {
  const posts = await getAllPosts();
  renderPosts(posts);
};

run();
