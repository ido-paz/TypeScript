class Car{
    wheeles:number=4;
    brand:string;
    
    getDetails(){
        return {wheeles:this.wheeles,brand: this.brand};
    }
}