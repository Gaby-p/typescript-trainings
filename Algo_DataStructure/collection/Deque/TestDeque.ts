import { Deque } from "./Deque";
import { DequeImpl } from "./DequeImpl";

const deque: Deque<number> = new DequeImpl(); 

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("peekBack", deque.PeekBack());

console.log("clear", deque.clear());
console.log("isEmpty", deque.isEmpty());
console.log("size", deque.size());
console.log("add front", deque.AddFront(2));
console.log("add front", deque.AddFront(12));
console.log("add front", deque.AddFront(4));
console.log("add front", deque.AddFront(7));
console.log("add front", deque.AddFront(5));


console.log("peek front", deque.PeekFront());
console.log("peekBack", deque.PeekBack());
console.log("remove front", deque.RemoveFront());
console.log("remove back", deque.RemoveBack());
console.log("add back", deque.AddBack(1));
console.log("add back", deque.AddBack(2));
console.log("add back", deque.AddBack(4));
console.log("add back", deque.AddBack(7));



//console.info(deque)

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);