import { LodashCopy } from "./LodashCopy";
import * as _ from "lodash";

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("test chunk function");

console.log(LodashCopy.compact([3, 0, null, undefined, '']))
console.log(LodashCopy.initial([1, 2, 3]));  

console.log(LodashCopy.join( [1, 2, 3], ";" ))

let array = ['a', 'b', 'c', 'a', 'b', 'c', 'c'];
 
array =  LodashCopy.pull(array, 'a', 'c');
console.log(array);
console.log(LodashCopy.drop([1, 2, 3, 4], 5 ))
console.log(LodashCopy.uniq([1, 2, 3, 3] ))

let arr = ['a', 'b', 'c', 'a', 'b', 'c', 'c'];

arr =  LodashCopy.without(arr, 'a', 'c');
console.log(arr);

console.log(LodashCopy.difference([1, 2, 3, 4], [5, 7, 3, 8] ))

console.log(LodashCopy.intersection([1, 2, 3, 4], [5, 7, 3, 8], [5, 4, 3, 8], [1] ))

console.log(_.intersection([1, 2, 3, 4], [5, 7, 3, 8], [5, 4, 3, 8],  ))

console.log(LodashCopy.tail([1,3, 4, 8, 2]))

console.log(LodashCopy.slice([7,1,3, 4, 8, 2]))

console.log("cc", LodashCopy.takeRight([7,1,3, 4, 8, 2], 2))

console.log(LodashCopy.reverse([7,1,3, 4, 8, 2]))

console.log(LodashCopy.fill([7,1,3,],'a', 1, 2))

console.log(LodashCopy.zip(['a', 'b'], [1, 2], [true, false])
)

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
