interface CommonSalaryType {
    basicPay: number
  }
  
  interface ManagerSalaryType extends CommonSalaryType {
    employeesCount: number;
  }
  
  interface ContractSalaryType extends CommonSalaryType {
    tax: number
  }
  
  interface Employee<EmpType> {
    name: string;
    salary: EmpType
  }
  //usage demo:
  // let roi : Employee<CommonSalaryType> = {
  //     name:'Roi',
  //     salary :{basicPay:12000}
  // }
  // let shir: Employee<ManagerSalaryType> = {
  //   name:'Shir' ,
  //   salary :{basicPay:14000,employeesCount:3}
  // }
  // let eli: Employee<ContractSalaryType> = {
  //   name:'eli',
  //   salary : {basicPay:7000,tax:0.2}
  // };
  //roi.salary.basicPay = 444;
  //shir.salary.employeesCount
  //eli.salary.tax 