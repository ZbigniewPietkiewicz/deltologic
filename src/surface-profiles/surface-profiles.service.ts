import { Injectable } from '@nestjs/common';
import { SolveSurfaceProfileDto } from './dto/solve-surface-profile.dto';

@Injectable()
export class SurfaceProfilesService {
  solve(solveSurfaceProfileDto: SolveSurfaceProfileDto) {
    //First I want to find what is the highest point of surface profile
    const highestSurfaceProfilePoint = Math.max(
      ...solveSurfaceProfileDto.surfaceProfile,
    );
    //Using found highest point of surface I create negative surface profile
    const negSurfaceProfile: number[] = [
      ...solveSurfaceProfileDto.surfaceProfile.map(
        (x) => highestSurfaceProfilePoint - x,
      ),
    ];

    //Now I create negative profiles that will be traversed from left and right to map lowest point found so far.
    const negSurfaceProfileLowestPointsFromLeft: number[] = new Array(
      negSurfaceProfile.length,
    ).fill(0);
    const negSurfaceProfileLowestPointsFromRight: number[] = new Array(
      negSurfaceProfile.length,
    ).fill(0);

    //those two will be used when traversing
    let highestSurfaceProfilePointFromLeft: number = highestSurfaceProfilePoint;
    let highestSurfaceProfilePointFromRight: number =
      highestSurfaceProfilePoint;

    //traversing from left, filling table with lowest point found so far in each index
    for (let i = 0; i < negSurfaceProfile.length; i++) {
      if (negSurfaceProfile[i] < highestSurfaceProfilePointFromLeft) {
        highestSurfaceProfilePointFromLeft = negSurfaceProfile[i];
      }
      //if we reached zero there is no point to seek more
      if (highestSurfaceProfilePointFromLeft === 0) {
        break;
      }
      negSurfaceProfileLowestPointsFromLeft[i] =
        highestSurfaceProfilePointFromLeft;
    }

    //traversing from right, filling table with lowest point found so far in each index
    for (let i = negSurfaceProfile.length - 1; i > 0; i--) {
      if (negSurfaceProfile[i] < highestSurfaceProfilePointFromRight) {
        highestSurfaceProfilePointFromRight = negSurfaceProfile[i];
      }
      //if we reached zero there is no point to seek more
      if (highestSurfaceProfilePointFromRight === 0) {
        break;
      }
      negSurfaceProfileLowestPointsFromRight[i] =
        highestSurfaceProfilePointFromRight;
    }

    let waterTotal: number = 0;

    //Now our negative profile will be reduced either by lowest point as found from left or right side, depending on whichever is bigger.
    //Result is amount of water that can be stored.
    for (let i = 0; i < negSurfaceProfile.length; i++) {
      waterTotal =
        waterTotal +
        Math.max(
          0,
          negSurfaceProfile[i] -
            Math.max(
              negSurfaceProfileLowestPointsFromLeft[i],
              negSurfaceProfileLowestPointsFromRight[i],
            ),
        );
    }
    return waterTotal;
    //solution presented here is variation of solution below, designed to deal with edge cases of for example [1, 2, 1] surface profile.
  }

  //Old solution, there were problems with reverse U shaped surface profile.
  //   solve(solveSurfaceProfileDto: SolveSurfaceProfileDto) {

  //     const surfaceProfileMaxFromLeft: number[] = [
  //       ...solveSurfaceProfileDto.surfaceProfile,
  //     ];
  //     const surfaceProfileMaxFromRight: number[] = [
  //       ...solveSurfaceProfileDto.surfaceProfile,
  //     ];
  //     let temp = 0;
  //     let waterTotal = 0;

  //     for (let i = 0; i < surfaceProfileMaxFromLeft.length; i++) {
  //       if (temp < surfaceProfileMaxFromLeft[i]) {
  //         temp = surfaceProfileMaxFromLeft[i];
  //       }
  //       surfaceProfileMaxFromLeft[i] = temp;
  //     }
  //     for (let i = surfaceProfileMaxFromRight.length; i > 0; i--) {
  //       if (temp < surfaceProfileMaxFromRight[i]) {
  //         temp = surfaceProfileMaxFromRight[i];
  //       }
  //       surfaceProfileMaxFromRight[i] = temp;
  //     }
  //     for (let i = 0; i < solveSurfaceProfileDto.surfaceProfile.length; i++) {
  //       waterTotal =
  //         waterTotal +
  //         Math.max(
  //           0,
  //           Math.min(
  //             surfaceProfileMaxFromLeft[i],
  //             surfaceProfileMaxFromRight[i],
  //           ) - solveSurfaceProfileDto.surfaceProfile[i],
  //         );
  //     }
  //     return waterTotal;
  //   }
}
