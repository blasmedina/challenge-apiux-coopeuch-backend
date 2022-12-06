import { Module } from '@nestjs/common';
import { IndicatorsModule } from './indicators/indicators.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    IndicatorsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
