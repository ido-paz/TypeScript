class Country{
    private _name:string;
    private _lang:string;

    get name():string{
        return this._name;
    }
    set name(value){
        this._name = value;
    }

    get lang():string{
        return this._lang;
    }
    set lang(value){
        this._lang = value;
    }
}
