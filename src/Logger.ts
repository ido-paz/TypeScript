class Logger {
    static UndefindMessage :string ='output element undefind';
    OutputElement : any;
    
    constructor(outputElement : any) {
        this.OutputElement = outputElement;
    }
    //
    Write2Div(message :string )
    {
        if(this.OutputElement!=null)
            this.OutputElement.innerText = message;
        else
            throw Error(Logger.UndefindMessage);
    }
    //
    Append2Div(message :string )
    {
        if(this.OutputElement!=null)
            this.OutputElement.innerText = this.OutputElement.innerText + message;
        else
            throw Error(Logger.UndefindMessage);
    }
    //
    Write2Console(message :string )
    {
        console.log(message);
    }
    //
}
