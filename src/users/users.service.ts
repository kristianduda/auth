import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,

  ) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        permissions: ['profile']
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        permissions: ['profile']
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        permissions: ['profile']
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.db.collection('users').findOne({
      username
    });
  }
}
