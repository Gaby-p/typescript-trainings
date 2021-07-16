import { add } from "lodash";
import { Set } from "./Set";

const set: Set<number> = new Set<number>(); //TODO: change the undifined

const otherSet: Set<number> = new Set<number>(); //TODO: change the undifined

otherSet.add(4).add(9);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
set.add(4).add(2).add(8);
console.log("difference", set.difference(otherSet).toString());
console.log("intersection", set.intersection(otherSet).toString());
console.log("union", set.union(otherSet).toString());

console.log(set.toString());
console.log("ici", set.has(2));
console.log("value delete", set.delete(2));
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(trees);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
