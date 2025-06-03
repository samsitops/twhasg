import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';

const configFactory = {
  provide: ConfigService,
  useFactory: () => {
    const config = ConfigService;
    config.loadFromEnv();
    return config;
  },
};

@Module({
  imports: [],
  controllers: [],
  providers: [configFactory],
  exports: [configFactory],
})
export class ConfigModule {}
