import { HttpModule } from '@infra/nest/http/modules/http.module';
import { DatabaseModule } from '@infra/nest/mongo/database.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ShareEnergy'),
    HttpModule,
    DatabaseModule,
  ],
})
export class AppModule {}
