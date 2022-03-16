import { BaseEntity } from '../../shared/base.model';
import { ITag } from '../tags/tags.model';

export interface IPost extends BaseEntity {
  title: string;
  content: string;
  tags: ITag[];
  /** user id reference */
  created_by?: string;
}
