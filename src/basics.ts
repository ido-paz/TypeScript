let now : Date = new Date();
let second : number = now.getSeconds() ;
let minute : number = now.getMinutes() ;
let hour : number = now.getHours() ;
const message : string = 'execution started at: ' + hour + ':' + minute + ':' + second;
//
const logger = new Logger(document.querySelector('#outputDiv'));
logger.Append2Div(message);
