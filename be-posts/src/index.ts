import express, { Request, Response, NextFunction } from 'express';
import { respond } from './utils/response-utils';
import { IPost } from 'shared-types/src/models/posts/post.models';

const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.listen(port, () => {
  console.log(`Posts service listening to ${port}.`);
});

const getPosts = () => {
  const posts: IPost[] = [
    {
      content: 'lorem ipsum...',
      tags: [
        { color: 'red', label: 'web' },
        { color: 'blue', label: 'typescript' },
      ],
      title: 'My first post',
    },
    {
      content: 'lorem ipsum...',
      tags: [
        { color: 'red', label: 'web' },
        { color: 'blue', label: 'typescript' },
      ],
      title: 'My second post',
    },
    {
      content: 'lorem ipsum...',
      tags: [
        { color: 'red', label: 'web' },
        { color: 'blue', label: 'typescript' },
      ],
      title: 'Some post',
      created_by: 'Jane',
    },
  ];

  return respond(posts);
};

app.get('/posts', (request: Request, response: Response, next: NextFunction) => {
  console.log(request);
  response.status(200).json(getPosts());
});
