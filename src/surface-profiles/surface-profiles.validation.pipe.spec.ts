import { ArgumentMetadata, UnprocessableEntityException } from '@nestjs/common';
import { SurfaceProfilesValidationPipe } from './surface-profiles.validation.pipe';
import { SolveSurfaceProfileDto } from './dto/solve-surface-profile.dto';

describe('SurfaceProfileValidationPip should', () => {
  let target: SurfaceProfilesValidationPipe;
  const metadata: ArgumentMetadata = {
    type: 'body',
    metatype: SolveSurfaceProfileDto,
    data: '',
  };

  beforeEach(() => {
    target = new SurfaceProfilesValidationPipe();
  });
  it('pass well formed data through', async () => {
    const mockDto: SolveSurfaceProfileDto = { surfaceProfile: [2, 1, 2] };
    expect(await target.transform(mockDto, {} as any)).toEqual(mockDto);
  });

  describe('throw 422 error when validation fails', () => {
    it('because of nested array', async () => {
      //@ts-expect-error wrong data for testing
      const mockDto: SolveSurfaceProfileDto = { surfaceProfile: [[2, 1], 2] };
      try {
        await target.transform(mockDto, metadata as any);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
    it('because of negative value in array', async () => {
      const mockDto: SolveSurfaceProfileDto = { surfaceProfile: [2, -1, 2] };
      try {
        await target.transform(mockDto, metadata as any);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
    it('because not number value in array', async () => {
      //@ts-expect-error wrong data for testing
      const mockDto: SolveSurfaceProfileDto = { surfaceProfile: [2, 'a', 2] };
      try {
        await target.transform(mockDto, metadata as any);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
    it('because array is too short', async () => {
      const mockDto: SolveSurfaceProfileDto = { surfaceProfile: [2, 2] };
      try {
        await target.transform(mockDto, metadata as any);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
    it('because array was empty', async () => {
      const mockDto: SolveSurfaceProfileDto = { surfaceProfile: [] };
      try {
        await target.transform(mockDto, metadata as any);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
    it('because there was no surfaceProfile', async () => {
      //@ts-expect-error wrong data for testing
      const mockDto: SolveSurfaceProfileDto = {};
      try {
        await target.transform(mockDto, metadata as any);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
  });
});
