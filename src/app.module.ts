import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurfaceProfilesModule } from './surface-profiles/surface-profiles.module';

@Module({
  imports: [SurfaceProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
