import { CollectionInterface } from "../Collection";
import { MapItem } from "./Model/MapItem";
// source : https://dev.to/swarup260/data-structures-algorithms-in-javascript-dictionary-3b7f
// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

export class MapImpl<K, V> implements CollectionInterface {
  private _elements: MapItem<K, V>[];

  constructor() {
    this._elements = [];
  }

  /**
   * Removes all key-value pairs from the Map object.
   * O(1)
   */
  public clear(): void {
    this._elements = [];
  }

  //FIXME: O(n)
  /**
   * Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
   * @param key
   */
  ///delete une key du coup ça delete la valeur ?
  public delete(key: K): boolean {
    // throw new Error("This function has to be implemented");
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (key === element.key) {
        this._elements[index] = new MapItem();
        return true;
      }

      return false;
    }
  }

  //FIXME: O(n) => boucle
  /**
   * Returns the value associated to the key, or undefined if there is none.
   * @param key
   */
  public get(key: K): V | undefined {
    // throw new Error('This function has to be implemented');
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (key === element.key) {
        return element.value;
      }
    }

    return undefined;
  }

  //FIXME: O(n) => boucle
  /**
   * Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
   * @param key
   */
  public has(key: K): boolean {
    // throw new Error('This function has to be implemented');
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (key === element.key) {
        return true;
      }
    }
    return false;
  }

  //FIXME: O(n)
  /**
   * Sets the value for the key in the Map object. Returns the Map object.
   * @param value
   * @param key
   */
  //void ne renvoit rien
  public set(key: K, value: V): void {
    // throw new Error('This function has to be implemented');
    if (!this.has(key)) {
      this._elements[this._elements.length] = new MapItem(value, key);
    } else {
      for (let index = 0; index < this._elements.length; index++) {
        const element = this._elements[index];
        if (key === element.key) {
          this._elements[index].value = value;
        }
      }
    }
  }
  public toString(): string {
    let stringReturn = "[";
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      stringReturn += " " + "key : " + element.key + " value: " + element.value;
    }

    stringReturn += "]";

    return stringReturn;
  }
}
