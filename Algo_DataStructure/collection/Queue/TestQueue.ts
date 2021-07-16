import { Queue } from "./Queue";

const queue: Queue<number> = new Queue(); //TODO: change the undifined

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("clear", queue.clear());
console.log("Empty", queue.isEmpty());
console.log("size", queue.size());
console.log("Enqueue", queue.enqueue(1), queue.enqueue(3), queue.enqueue(9));
console.log("toString", queue.toString());
console.log("dequeue", queue.dequeue());
console.log("dequeue to string", queue.toString());

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
