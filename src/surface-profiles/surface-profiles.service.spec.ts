import { Test, TestingModule } from '@nestjs/testing';
import { SurfaceProfilesService } from './surface-profiles.service';
import { SolveSurfaceProfileDto } from './dto/solve-surface-profile.dto';

describe('SurfaceProfilesService should', () => {
  let service: SurfaceProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurfaceProfilesService],
    }).compile();

    service = module.get<SurfaceProfilesService>(SurfaceProfilesService);
  });

  it('exist', () => {
    expect(service).toBeDefined();
  });

  it('return 1 for [2, 1, 2] profile', () => {
    const payload: SolveSurfaceProfileDto = { surfaceProfile: [2, 1, 2] };
    expect(service.solve(payload)).toBe(1);
  });

  it('return 0 for [1, 2, 1] profile', () => {
    const payload: SolveSurfaceProfileDto = { surfaceProfile: [1, 2, 1] };
    expect(service.solve(payload)).toBe(0);
  });

  it('return 2 for [3, 2, 4, 1, 2] profile', () => {
    const payload: SolveSurfaceProfileDto = {
      surfaceProfile: [3, 2, 4, 1, 2],
    };
    expect(service.solve(payload)).toBe(2);
  });

  it('return 8 for [4, 1, 1, 0, 2, 3] profile', () => {
    const payload: SolveSurfaceProfileDto = {
      surfaceProfile: [4, 1, 1, 0, 2, 3],
    };
    expect(service.solve(payload)).toBe(8);
  });

  it('return 0 for [0, 0, 0, 0, 0, 0] profile', () => {
    const payload: SolveSurfaceProfileDto = {
      surfaceProfile: [0, 0, 0, 0, 0, 0],
    };
    expect(service.solve(payload)).toBe(0);
  });

  it('return 0 for [0, 1, 0, 2, 0, 2, 1, 3, 0, 1, 0, 2, 2, 0] profile', () => {
    const payload: SolveSurfaceProfileDto = {
      surfaceProfile: [0, 1, 0, 2, 0, 2, 1, 3, 0, 1, 0, 2, 2, 0],
    };
    expect(service.solve(payload)).toBe(9);
  });
});
