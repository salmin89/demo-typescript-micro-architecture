import { BaseEntity } from '../../shared/base.model';
import { IPost } from '../posts/post.models';
export interface IUser extends BaseEntity {
    name: string;
    age: number;
    posts?: IPost[];
}
/**
 * User objects allow you to associate actions performed in the system with the user that performed them.
 * The User object contains common information across every user in the system regardless of status and role.
 *
 *
 * @example {
 *  "id": "52907745-7672-470e-a803-a2f8feb52944",
 *  "name": "John Doe",
 *  "phoneNumbers": []
 * }
 */
export interface User {
    id: string;
    /**
     * The email the user used to register his account
     */
    email: string;
    name: string;
    status?: 'Happy' | 'Sad';
    phoneNumbers: string[];
    posts?: IPost[];
}
