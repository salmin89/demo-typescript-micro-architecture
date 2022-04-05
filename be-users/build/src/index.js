"use strict";
// import express, { Request, Response, NextFunction } from 'express';
// import { respond } from './utils/response-utils';
// import { IUser } from 'shared-types/src/models/users/user.models';
// const cors = require('cors');
// const app = express();
// const port = 3000;
// app.use(cors());
// app.listen(port, () => {
//   console.log(`Posts service listening to ${port}.`);
// });
// const getUsers = () => {
//   const users: IUser[] = [
//     {
//       name: 'John',
//       age: 30,
//       posts: [
//         {
//           content: 'Some content',
//           title: 'My post',
//           tags: [
//             {
//               color: 'red',
//               label: 'typescript',
//             },
//           ],
//         },
//       ],
//     },
//     { name: 'Jane', age: 28 },
//   ];
//   return respond(users);
// };
// app.get('/users', (request: Request, response: Response, next: NextFunction) => {
//   response.status(200).json(getUsers());
// });
