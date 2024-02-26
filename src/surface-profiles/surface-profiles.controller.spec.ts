import { Test, TestingModule } from '@nestjs/testing';
import { SurfaceProfilesController } from './surface-profiles.controller';
import { SurfaceProfilesService } from './surface-profiles.service';
import { SolveSurfaceProfileDto } from './dto/solve-surface-profile.dto';

describe('SurfaceProfilesController should', () => {
  let controller: SurfaceProfilesController;
  let service: SurfaceProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurfaceProfilesController],
      providers: [SurfaceProfilesService],
    }).compile();

    controller = module.get<SurfaceProfilesController>(
      SurfaceProfilesController,
    );

    service = module.get<SurfaceProfilesService>(SurfaceProfilesService);
  });

  it('exist', () => {
    expect(controller).toBeDefined();
  });

  it('call service if proper data has been received', async () => {
    const payload: SolveSurfaceProfileDto = { surfaceProfile: [2, 1, 2] };
    jest.spyOn(service, 'solve').mockImplementation(() => 1);
    await controller.solve(payload);

    expect(service.solve).toHaveBeenCalled();
  });
});
