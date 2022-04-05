"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    get(id, name) {
        return {
            id: id.toString(),
            email: 'jane@doe.com',
            name: name !== null && name !== void 0 ? name : 'Jane Doe',
            status: 'Happy',
            phoneNumbers: [],
        };
    }
    create(userCreationParams) {
        return Object.assign({ id: Math.floor(Math.random() * 10000).toString(), status: 'Happy' }, userCreationParams);
    }
}
exports.UsersService = UsersService;
