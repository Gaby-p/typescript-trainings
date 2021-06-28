
import { DoubleLinkedNode } from "../Node/Node";
import { Deque } from "./Deque";

//source : https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b
export class DequeImpl<T> implements Deque<T> {
    private _first : DoubleLinkedNode<T>;
    private _last : DoubleLinkedNode<T>;
    

    constructor(){
        //TODO: create Deque
        console.log('Deque consfructor');   
    }

    //FIXME: O(?)
    clear(): void {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    size(): number {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    PeekFront(): T {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    AddFront(elt: T): void {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    RemoveFront(): T {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    PeekBack(): T {
        throw new Error("Method not implemented.");
    }


    //FIXME: O(?)
    AddBack(elt: T): void {
        throw new Error("Method not implemented.");
    }

    //FIXME: O(?)
    RemoveBack():T {
        throw new Error("Method not implemented.");
    }


    //FIXME: O(?)
    toString(): string {
        throw new Error("Method not implemented.");
    }
   
}