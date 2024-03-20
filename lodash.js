import _ from "lodash";

const chunks = _.chunk(["a", "b", "c", "d"], 3);
console.log(chunks);

const compact = _.compact([
  1,
  2,
  false,
  true,
  3,
  "",
  12,
  null,
  "asd",
  undefined,
]);
console.log(compact);

let Array = [123, 90];
const concat = _.concat(Array, 2, [3], [4], [[0, 12]]);
console.log(concat);

const difference = _.difference([2, 11, 0, 12, 100], [32, 3, 23, 11, 0, 2]);
console.log(difference);

const differenceBy = _.differenceBy(
  [2.3, 1.4, 0.3],
  [3.2, 3.4, 1.5],
  Math.floor
);
console.log(differenceBy);

let obj = [
  { x: 12, y: 22 },
  { x: 13, y: 14 },
];

console.log(_.differenceWith(obj, [{ x: 13, y: 22 }], _.isEqual));

const drop = _.drop([1, 3, 5, 12], 3);
console.log(drop);

const flatten = _.flatten([12, [22, [32, [44]], [2]], [1]]);
console.log(flatten);

const flattenDeep = _.flattenDeep([100, [32, 54, [44], [45]], 5]);
console.log(flattenDeep);

const countBy = _.countBy([1.5, 12.1, 100.12, 1.4], Math.floor);
console.log(countBy);

const countByLength = _.countBy(["four", "hundreds", "two", "one"], "length");
console.log(countByLength);

const every = _.every([false, 2, null, "yes", true, 0], Boolean);
console.log(every);

const findLast = _.findLast([23, 1, 54, 123, 90], function (n) {
  return n % 3 == 0;
});
console.log(findLast);

function duplicate(n) {
  return [n, n];
}

console.log(_.flatMap([12, 23], duplicate));
