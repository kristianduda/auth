import { Injectable, Inject } from "@nestjs/common";
import { Db } from "mongodb";

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject("DATABASE_CONNECTION")
    private db: Db
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.db.collection("users").findOne({
      username,
    });
  }
}
