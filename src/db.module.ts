import { Module } from "@nestjs/common";
import { MongoClient, Db } from "mongodb";
import { ConfigService } from "@nestjs/config";

@Module({
  providers: [
    {
      provide: "DATABASE_CONNECTION",
      useFactory: async (configService: ConfigService): Promise<Db> => {
        try {
          const client = await MongoClient.connect(
            configService.get<string>("CONNECTION_STRING")
          );
          return client.db(configService.get<string>("DATABASE"));
        } catch (e) {
          throw e;
        }
      },
      inject: [ConfigService],
    },
  ],
  exports: ["DATABASE_CONNECTION"],
})
export class DatabaseModule {}
