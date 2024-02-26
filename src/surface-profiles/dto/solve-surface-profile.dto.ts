import { ArrayMinSize, ArrayNotEmpty, IsNumber, Min } from 'class-validator';

export class SolveSurfaceProfileDto {
  @ArrayNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 }, { each: true })
  @Min(0, { each: true })
  @ArrayMinSize(3)
  public surfaceProfile: number[];
}
