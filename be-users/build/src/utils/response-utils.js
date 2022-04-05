"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = void 0;
function respond(data) {
    return {
        status: 200,
        _meta: {},
        data,
    };
}
exports.respond = respond;
