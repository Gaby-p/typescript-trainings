export class Set<T> {
  size: number;
  private _elements: T[];

  constructor() {
    this.size = 0;
    this._elements = [];
  }

  //FIXME: O(?)
  /**
     Appends value to the Set object. Returns the Set object with added value.
     * @param value 
     */
  public add(value: T): Set<T> {
    // throw new Error("This function has to be implemented");
    if (!this.has(value)) {
      // const end = this._elements.length;
      // this._elements[end] = value
      this._elements.push(value);
      this.size++;
    }
    return this;
  }

  //FIXME: O(1)
  /**
   * Removes all elements from the Set object.
   */
  public clear(): void {
    // throw new Error('This function has to be implemented');
    this._elements = [];
    this.size = 0;
  }

  //FIXME: O(n)
  /**
   * Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not.
   * @param value
   */
  public delete(value: T): boolean {
    // throw new Error("This function has to be implemented");
    // console.log("COUCOU");
    if (!this.has(value)) {
      console.log("SALUT", value);
      return false;
    }

    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (element === value) {
        this._elements[index] = null;
        this.size--;
        return true;
      }
    }

    return false;
  }

  //FIXME: O(n)
  /**
   * Returns a boolean asserting whether an element is present with the given value in the Set object or not.
   * @param value
   */
  public has(value: T): boolean {
    // throw new Error("This function has to be implemented");
    for (let index = 0; index < this.size; index++) {
      const element = this._elements[index];
      if (element && element == value) {
        return true;
      }
    }
    return false;
  }

  //FIXME: O(?)
  /**
   *  Return new Set which contains all the elements from two sets.
   * @param otherSet
   */
  public union(otherSet: Set<T>): Set<T> {
    // throw new Error("This function has to be implemented");
    const newSet = new Set<T>();
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      newSet.add(element);
    }
    for (let index = 0; index < otherSet._elements.length; index++) {
      const element = otherSet._elements[index];
      newSet.add(element);
    }
    return newSet;
  }

  //FIXME: O(?)
  /**
   * Return new Set which contains the intersecting element from two sets.
   * @param otherSet
   */
  public intersection(otherSet: Set<T>): Set<T> {
    // throw new Error("This function has to be implemented");
    const newSet = new Set<T>();
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (otherSet.has(element)) {
        newSet.add(element);
      }
    }
    return newSet;
  }

  //FIXME: O(?)
  /**
   * Return new Set only containing the elements which are not present in other sets.
   * @param otherSet
   */
  public difference(otherSet: Set<T>): Set<T> {
    //FIXME: otherSet._elements, why am i able to do this ?
    // throw new Error("This function has to be implemented");
    const newSet = new Set<T>();
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (!otherSet.has(element)) {
        newSet.add(element);
      }
    }
    return newSet;
  }

  //FIXME: O(?)
  /**
   * Return true if all elements are present in the given otherSet.
   * @param otherSet
   */
  public isSubset(otherSet: Set<T>): boolean {
    // throw new Error("This function has to be implemented");
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (!otherSet.has(element)) {
       return false
      }
    }
    return true;
  }
  public toString(): string {
    let toReturn = "";
    for (let index = 0; index < this._elements.length; index++) {
      const element = this._elements[index];
      if (element) {
        toReturn += " " + element;
      }
    }
    return toReturn;
  }
}
