import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransportsModule } from './modules/transports.module';
import { ResolversModule } from './modules/resolvers.module';
import { CommonModule } from './modules/common.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [CommonModule, AuthModule, TransportsModule, ResolversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
