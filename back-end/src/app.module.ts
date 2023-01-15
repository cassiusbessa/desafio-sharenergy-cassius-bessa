import { ControllersCustomerModule } from '@infra/nest/http/nest-controllers/controllers.module';
import { NestMiddlewareAuth } from '@infra/nest/http/nest-middleware/nest-middleware-auth';
import { DatabaseModule } from '@infra/nest/mongo/database.module';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { NestTokenService } from '@infra/nest/providers/services/nest-token-service';
import { UseCasesModule } from '@infra/nest/providers/use-case/use-cases.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ShareEnergy'),
    RepositoriesModule,
    UseCasesModule,
    DatabaseModule,
    ControllersCustomerModule,
  ],
  providers: [
    {
      provide: 'TokenService',
      useClass: NestTokenService,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NestMiddlewareAuth).forRoutes('customers');
  }
}
