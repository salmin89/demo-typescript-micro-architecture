import { IResponse } from 'shared-types/src/shared/response.interface';
import { IUser } from 'shared-types/src/models/users/user.models';
import { IPost } from 'shared-types/src/models/posts/post.models';

const appDiv: HTMLElement = document.getElementById('app');

const getAlluser = async (): Promise<IResponse<IUser[]>> => {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  return data;
};

const renderUsers = (users: IResponse<IUser[]>) => {
  appDiv.innerHTML = `
  <ul>
  ${users.data.map((user) => `<li>${user.name.trim()} (${user.age})<ul></ul></li>`).join('')}
  </ul>`;
};

const run = async () => {
  const users = await getAlluser();
  renderUsers(users);
};

run();
