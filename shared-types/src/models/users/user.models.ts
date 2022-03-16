import { BaseEntity } from '../../shared/base.model';
import { IPost } from '../posts/post.models';

export interface IUser extends BaseEntity {
  name: string;
  age: number;
  posts?: IPost[];
}
