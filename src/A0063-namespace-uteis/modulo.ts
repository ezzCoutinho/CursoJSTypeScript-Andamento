import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, acumulador) => total * acumulador, 1);
};

global.MINHAGLOBAL = 'wow';

export default _;
