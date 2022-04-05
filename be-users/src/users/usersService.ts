import { User } from 'shared-types/src/models/users/user.models';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id: id.toString(),
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000).toString(), // Random
      status: 'Happy',
      ...userCreationParams,
    };
  }
}
