import { LinkedList } from "./LinkedList";
import { LinkedListImpl } from "./LinkedListImpl";

const list: LinkedList<string> = new LinkedListImpl(); //TODO: change the undifined

const litsTest = "[]";
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);

console.log(
  list.push("hello"),
  list.push("cc"),
  list.push("bonjour"),
  list.size()
);
console.log("insertion", list.insert(1, "lol"))

// console.log(list.remove("hello"), list.size());
"salut".length;
console.log("getElement ici", list.getElementAt(2));
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------"
);
