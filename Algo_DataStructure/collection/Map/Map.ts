import { MapItem } from "./Model/MapItem";
// source : https://dev.to/swarup260/data-structures-algorithms-in-javascript-dictionary-3b7f
// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

export class Map<K,V> {

    private _nbrElt:number;
    private _elements: MapItem<K,V>[];

    constructor(){
        this._nbrElt = 0;
        this._elements = [];
    }


    /**
     * Removes all key-value pairs from the Map object.
     * O(1)
     */
    public clear():void {
        
    }
    

    //FIXME: O(?)
    /** 
     * Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. 
     * @param key
     */
    public delete(key:K ): boolean{
        throw new Error('This function has to be implemented');
    }



     //FIXME: O(?)
    /**
     * Returns the value associated to the key, or undefined if there is none.
     * @param key 
     */
    public get(key:K): V | undefined {
        throw new Error('This function has to be implemented');
    }



     //FIXME: O(?)
    /**
     * Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
     * @param key 
     */
    public has(key:K): boolean {
        throw new Error('This function has to be implemented');
    }

     //FIXME: O(?)
    /**
     * 
     * @param value 
     * @param key 
     */
    public set( value:V, key: K){

    }


}