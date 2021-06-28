import { LinkedNode } from "../Node/Node";
export class Deque<T> {
    private first : LinkedNode<T>;
    private last : LinkedNode<T>;

    constructor(){
        console.log('Deque consfructor');
    }


}