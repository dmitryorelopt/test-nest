import { Module } from '@nestjs/common';
import { FacebookController } from './facebook.controller';
import { FacebookService } from './facebook.service';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  controllers: [FacebookController],
  providers: [FacebookService, FacebookStrategy],
})
export class FacebookModule {}
