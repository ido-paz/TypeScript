function exists(array:string[] , value:string) :boolean{
    return array.some(v=>{
        return v===value;
    })
}
//
function logMessage(message) :void{
    console.log(message);
}
//

let b :boolean = exists(['pi','aaaa'],"fdsfds");