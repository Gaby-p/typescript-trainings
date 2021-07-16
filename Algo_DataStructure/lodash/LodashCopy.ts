/**
 * The purpose of this class is to implement https://github.com/mirahi-io/hc-js-lodash-es6 into ts
 */


export class LodashCopy {
  /**
   * Creates an array with all falsey values removed
   * @param array
   */
  static compact(array: any[]): any[] {
    // throw new Error("function to be implemented");
    // let arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
 
    let filtered = array.filter(Boolean);
    return filtered;
     
  }

  /**
   * Creates a slice of array with n elements dropped from the beginning.
   * @param array
   * @param n
   */
  ///Je comprends pas ce qu'il fait, à faire plus tard
  ///n par defaut vaudra 1 
  static drop(array: any[], n?: number) {
    // throw new Error("function to be implemented");
    if(!n){
      n = 1
    }
    const newArr = []
    for (let index = n; index < array.length; index++) {
      const element = array[index];
      newArr.push(element);
    } 
    return newArr
  }

  /**
   * Gets all but the last element of array.
   * @param array
   */
  static initial(array: any[]): any[] {
    // throw new Error("function to be implemented");
    // const init = array.slice(0, -1);
    // return init
    const init = [];
    for (let index = 0; index < array.length -1; index++) {
      const element = array[index];
      init.push(element)
    }
    return init

  }

  /**
   * Creates a slice of array from start up to, but not including, end.
   * @param array 
   * @param start 
   * @param end 
   */
  static slice(array: any[], start=0, end=array.length){
    //throw new Error("function to be implemented");
    let newArr = []
    if (!start) {
      return array;
    }
    if (start < 0) {
      // start += this.tailleLogique;
      //start ++ correspond à start = start +1
      start = start + array.length;
      if (start < 0) {
        start = 0;
      }
    } // -1 + 4 = 3
    /// -10 + 2 = -8 -> commence a 0

    if ( end > array.length) {
      end = array.length;
    }
    if (end < 0) {
      end = end + array.length;
      if (end < 0) {
        return [];
      }
    }
    ///on initialise les valeurs de start et end ici pour eviter d'avoir des trous
   
    for (let i = start; i < end; i++) {
    newArr.push(array[i])
    }

    return newArr;
    

}

/**
 * The inverse of _.toPairs; this method returns an object composed from key-value pairs.
 * @param pair 
 */
static fromPairs(pair: any[]){
   throw new Error("function to be implemented");
   ///object.entries()?
   //let myPairs = new Object();
  //  const myPairs = Object.fromEntries(pair);

  // //  for (const [key, value] of Object.entries(myPairs)) {
  // //   console.log(`${key}: ${value}`);
  // // }

  //   return myPairs;

}

  /**
   * 
   * @param array 
   * @param start 
   * @param end 
   */
  static fill( array: any[], value ,start=0, end=array.length ){
    //throw new Error("function to be implemented");
    //4 lignes
    //remplace les elements deja present dans le tab par la valeur en argument
    // _.fill(Array(3) <- array, 2 <- value );
    // => [2, 2, 2] 

    for (let index = start; index < end; index++) {
       array[index] = value
    }
    return array

  }

  /**
   * 
   * @param array 
   */
  //un ou plusieurs paramètres (dernier paramètre)
  static zip(...array){
    //throw new Error("function to be implemented");
    const toReturn = [] //contient d'ô tab
    for (let index = 0; index < array.length-1; index++) { //parcours nbreelm 1er niveau (-1)
    const tmp = []// tab temporaire pr récup les premiers (niv 1)
      for (let j= 0; j< array.length; j++) { //parcours les tab
        tmp.push(array[j][index])  // index bouge pas, juste le j, pr avoir le tableau de premier etc     
      }
      toReturn.push(tmp)  //push tmp (plus haut) ds toreturn    
    }
    return toReturn
  }
  /**
   * Creates a slice of array with n elements taken from the end.
   * @param array 
   * @param n 
   */

  static takeRight( array: any[], n: number){
  //throw new Error("function to be implemented");
  ///utiliser le slice du haut avec -1?, cmt?
  if( n === 0){
    n = 1
  }
  return array.slice(-n)

  }

  /**
   * 
   * @param array 
   */
  static reverse(array: any[]){
  //  throw new Error("function to be implemented");
  let newArr = [];
 
  for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    let currentIndexRestTab = (array.length -1) - index;
    newArr[currentIndexRestTab] = element;
  }
  return newArr;
  }

  /**
   * Gets all but the first element of array.
   * @param array 
   */
  //retourner tous les elements d'un tableau sauf le premier
  static tail(array: any){
    //throw new Error("function to be implemented");
    let newArr = []
    for (let index = 1; index < array.length; index++) {
      const element = array[index];
      console.log(newArr.push(element))
    }
    return newArr
  }

  /**
   * onverts all elements in array into a string separated by separator.
   * @param array
   * @param separator   default [separator=',']
   */
  ///tous les elements deviennent un string avec une virgule entre chaque
  static join(array: any[], separator?: string): string {
    //throw new Error("function to be implemented");
    // const init = [];
    // const separate = " , "
    // //boucle pour  avoir tous les elements du tableau
    // //comment séparer avec une virgule?
  
    //un for pour parcourir le tableau,
    ///mettre la valeur des index de l'array avec le separateur
    ///retourner le separateur + element.value
    let toReturn = ""
    for (let index = 0; index < array.length -1; index++) {
      const element = array[index];
      toReturn += element + separator
    }
    toReturn += array[array.length -1]
    return toReturn;


    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

      
    // }
  }

  /**
   * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.
   * The order of result values is determined by the order they occur in the array.
   * @param array
   */
  static uniq(array: any[]): any[] {
    // throw new Error("function to be implemented");
    let newArr = []

    // const result = array.filter(array => array.length === array.value);

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(!newArr.includes(element)){
        console.log(newArr.push(element))
      }
    }
    return newArr
  }

  /**
   * Creates an array excluding all given values
   * @param array
   * @param values
   * @returns  Returns the new array of filtered values
   */
  static without(array: any[], ...values): any[] {
    //throw new Error("function to be implemented");
    let newArr = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(values.indexOf(element) === -1){
        console.log(newArr.push(element))
      }
    }
     return newArr
  }

  /**
   * Creates an array of array values not included in the other given arrays. The order and references of result values are determined by the first array.
   * @param array
   * @param values
   * @returns this method returns a new array.
   */
  static difference(array, values): any[] {
   // throw new Error("function to be implemented");
   let newArr = []

   for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!values.includes(element)) {
      console.log(newArr.push(element));
    }
   }

   return newArr

  }

  /**
   * Creates an array of unique values that are included in all given arrays. The order and references of result values are determined by the first array.
   * @param array
   */
  static intersection(...array): any[] {
    //throw new Error("function to be implemented");
    let newArr = []
    for (let index = 1; index < array.length; index++) {
      const element = array[index];
      for (let j = 0; j < element.length; j++) {
        const elementSubArray = element[j];
        if(array[0].includes(elementSubArray) && !newArr.includes(elementSubArray)){
          console.log(newArr.push(elementSubArray))
        }
        
      }
     
    }
    return newArr

  }


  //retirer un element donné
  //Pouvoir décider quoi supprimer

  static pull(array, ...values): any[] {
    // throw new Error("function to be implemented");
    console.info(values)
    console.info(array)
    const newArr = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(values.indexOf(element) === -1){
        console.log(newArr.push(element))
      }
    }
     return newArr
  }

  //faire foreach 

  // faire map

  //TODO: BONUS

  /**
   * Flattens array a single level deep.
   * @param array
   */
  static flatten(array: any[]): void {
    throw new Error("function to be implemented");
  }

  /**
   * Recursively flatten array up to depth times.
   * @param array
   * @param depth
   */
  static flattenDepth(array: any[], depth?: number) {
    throw new Error("function to be implemented");
  }
}
