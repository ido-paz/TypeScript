class Logger {
    static UndefindMessage :string = "output element undefind";
    OutputElement : any;

    constructor(outputElement : any) {
        this.OutputElement = outputElement;
    }
    //
    Write2Div(message :string ):void
    {
        if(this.OutputElement!=null) {
            this.OutputElement.innerHTML = message;
        } else {
            throw Error(Logger.UndefindMessage);
        }
    }
    //
    Append2Div(message :string ):void {
        if(this.OutputElement!=null) {
            this.OutputElement.innerHTML = this.OutputElement.innerText + message;
        } else {
            throw Error(Logger.UndefindMessage);
        }
    }
    //
    AppendLine2Div(message :string ):void {
        this.Append2Div("<br/>" + message);
    }
    //
    Write2Console(message :string ):void {
        console.log(message);
    }
    //
}
