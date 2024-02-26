//I decided to follow proposed nestjs convention
/* eslint-disable @typescript-eslint/ban-types */
import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class SurfaceProfilesValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new UnprocessableEntityException(
        'Provided data does not fit desired format. Data should be array of positive integers that has at least three elements, ie. [1, 0, 1]',
      );
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const data: Function[] = [String, Boolean, Number, Array, Object];
    return !data.includes(metatype);
  }
}
