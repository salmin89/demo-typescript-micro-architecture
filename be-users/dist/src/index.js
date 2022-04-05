"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_utils_1 = require("./utils/response-utils");
const cors = require('cors');
const app = (0, express_1.default)();
const port = 3000;
app.use(cors());
app.listen(port, () => {
    console.log(`Posts service listening to ${port}.`);
});
const getUsers = () => {
    const users = [
        {
            name: 'John',
            age: 30,
            posts: [
                {
                    content: 'Some content',
                    title: 'My post',
                    tags: [
                        {
                            color: 'red',
                            label: 'typescript',
                        },
                    ],
                },
            ],
        },
        { name: 'Jane', age: 28 },
    ];
    return (0, response_utils_1.respond)(users);
};
app.get('/users', (request, response, next) => {
    response.status(200).json(getUsers());
});
