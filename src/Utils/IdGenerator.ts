import { constants } from './Constants';

function* idGenerator(maxNumber: number) {
  let i = 0;
  while (i < maxNumber) {
    yield i++;
  }
}

export const genId = idGenerator(constants.idMaxNumber);
