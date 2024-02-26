import { Module } from '@nestjs/common';
import { SurfaceProfilesService } from './surface-profiles.service';
import { SurfaceProfilesController } from './surface-profiles.controller';

@Module({
  controllers: [SurfaceProfilesController],
  providers: [SurfaceProfilesService],
})
export class SurfaceProfilesModule {}
