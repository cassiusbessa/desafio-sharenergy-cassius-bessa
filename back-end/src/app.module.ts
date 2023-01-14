import { ControllersCustomerModule } from '@infra/nest/http/nest-controllers/controllers.module';
import { DatabaseModule } from '@infra/nest/mongo/database.module';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { UseCasesModule } from '@infra/nest/providers/use-case/use-cases.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ShareEnergy'),
    RepositoriesModule,
    UseCasesModule,
    DatabaseModule,
    ControllersCustomerModule,
  ],
})
export class AppModule {}
