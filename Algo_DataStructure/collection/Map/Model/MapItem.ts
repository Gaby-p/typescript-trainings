export class MapItem<K,V>{
    private _key : K | null;
    private _value : V;

    constructor(value?:V, key?: K){
        this._key = key;
        this._value = value;
    }

    public set key(key : K){
        this._key = key;
    }


    public set value(value: V){
        this._value = value;
    }

    public get key(){
        return this._key; 
    }

    public get value(){
        return this._value;
    }

}