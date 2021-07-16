import { visitParameterList } from "typescript";
import { MapImpl } from "./Map";

const myMap: MapImpl<number, string> = new MapImpl(); //TODO: change the undifined

const test = new Map();
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);

console.log(test.has(5), test.get(5));
console.log("test", myMap.has(5));

console.log("get", test.get(5), myMap.get(5));

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);

console.log("debut", myMap.toString());
myMap.set(5, "yo");
myMap.set(44, "hello");
console.log("\n add", myMap.toString());
myMap.set(5, "slt");
console.log("\n setting", myMap.toString());
console.log("delete", myMap.delete(5), myMap.toString());
