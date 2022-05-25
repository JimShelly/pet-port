import { Module } from '@nestjs/common';

import { ConfigModule } from '../modules/config.module';
import { AuthService } from '../services/auth.service';
import { HttpStrategy } from '../auth/http.strategy';
import { ConfigService } from '../services/config.service';
@Module({
  imports: [ConfigModule],
  providers: [HttpStrategy, AuthService],
})
export class AuthModule {}