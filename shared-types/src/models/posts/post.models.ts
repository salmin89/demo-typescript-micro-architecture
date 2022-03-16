import { BaseEntity } from '../../shared/base.model';
import { ITag } from '../tags/tags.models';

export interface IPost extends BaseEntity {
  title: string;
  content: string;
  tags: ITag[];
  /** user id reference */
  created_by?: string;
}
