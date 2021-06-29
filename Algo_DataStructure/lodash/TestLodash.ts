import { LodashCopy } from "./LodashCopy";
import * as _ from "lodash";


console.log("-------------------------------------------------------------------------------------------------------------------------------------------------");
console.log('test chunk function');
const chunkTested = ['a', 'b', 'c', 'd']
console.assert(_.chunk(chunkTested) === LodashCopy.chunk(chunkTested),'error it should be the same result');

console.log("-------------------------------------------------------------------------------------------------------------------------------------------------");

