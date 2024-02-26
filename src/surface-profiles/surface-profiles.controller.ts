import { Controller, Get, Body } from '@nestjs/common';
import { SurfaceProfilesService } from './surface-profiles.service';
import { SolveSurfaceProfileDto } from './dto/solve-surface-profile.dto';
import { SurfaceProfilesValidationPipe } from './surface-profiles.validation.pipe';

@Controller('surface-profiles')
export class SurfaceProfilesController {
  constructor(
    private readonly surfaceProfilesService: SurfaceProfilesService,
  ) {}

  @Get()
  solve(
    @Body(new SurfaceProfilesValidationPipe())
    solveSurfaceProfileDto: SolveSurfaceProfileDto,
  ) {
    return this.surfaceProfilesService.solve(solveSurfaceProfileDto);
  }
}
