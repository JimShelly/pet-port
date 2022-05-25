import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from '../services/config.service';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    ConfigService,
  ],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(process.cwd() + '/.env'),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}