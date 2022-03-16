"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_utils_1 = require("./utils/response-utils");
const cors = require('cors');
const app = (0, express_1.default)();
const port = 3001;
app.use(cors());
app.listen(port, () => {
    console.log(`Posts service listening to ${port}.`);
});
const getPosts = () => {
    const posts = [
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
    return (0, response_utils_1.respond)(posts);
};
app.get('/posts', (request, response, next) => {
    console.log(request);
    response.status(200).json(getPosts());
});
