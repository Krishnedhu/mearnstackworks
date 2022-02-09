var employees=[
    [1000,"ram","developer","kochi",25000,5],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,1],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]

// employees.map(emp=>emp[2]).forEach(dep=>console.log(dep))
// employees.map(e=>e[3]).forEach(loc=>console.log(loc))
// employees.filter(e=>e[2]=="developer").forEach(d=>console.log(d))

// find() abi details
// var empDetails=employees.find(emp=>emp[1]=="abi")
// console.log(empDetails);

//q1 print all employee names only //map()
// console.log(empNames=employees.map(emp=>emp[1]));
// console.log(employees.map(emp=>emp[1]));

// console.log(empNames=employees.map(emp=>emp[5]));
// console.log(employees.map(emp=>emp[5]));


// for (let employee of employees){
//     console.log(employee[1]);
// }


//q2 print number of employee in this company
// console.log(employees.length);



// //q3 print developer details only //filter()
// var developers=employees.filter(emp=>emp[2]=="developer")
// console.log(developers);
// for (let emp of employees){
//     if(emp[2]=="developer"){
//     console.log(emp);
// }
// }


//q4 print employee details whose salary >35000
// console.log("salary > 35000");
// for(let employee of employees){
//     if(employee[4] > 35000){
//         console.log(employee);
//     }
// }

//print details of employee arjun
// console.log("arjun details");
// for(let employee of employees){
//     if(employee[1]=="arjun"){
//         console.log(employee);
//     }
// }



//q5 sort employees based on salary order by descending
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);


//q6 sort employees baed on exp order by ascending
//  employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
//  console.log(employees);

 //total salary
// var totalSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalSalary);

//min salary
// var minSalEmp=employees.reduce((e1,e2)=>e1[4]<e2[4]?e1:e2)
// console.log(minSalEmp);

// var minSal=employees.reduceRight((e1,e2)=>e1[4]<e2[4]?e1:e2)
// console.log(minSal); 
//  var empsal=employees.map(emp=>emp[4])
//  var totalSalary=empsal.reduce((sal1,sal2))

//lowest experience employees
// var fresherEmp=employees.reduceRight((e1,e2)=>e1[5]<e2[5]?e1:e2)
// console.log(fresherEmp[1]);

// var fresherEmp=employees.reduce((e1,e2)=>e1[5]<e2[5]?e1:e2)
// console.log(fresherEmp[1]);


//highest salary
// var highPaidEmp=employees.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2)
// console.log(highPaidEmp);

//highest experience TO Print 1st emp
// var hexpEmp=employees.reduceRight((e1,e2)=>e1[5]>e2[5]?e1:e2)
// console.log(hexpEmp);

// var hexpEmp=employees.reduceRight((e1,e2)=>e1[5]>e2[5]?e1[4]:e2[4])
// console.log(hexpEmp);


//highest experience TO Print last emp
// var hexpEmp=employees.reduce((e1,e2)=>e1[5]>e2[5]?e1:e2)
// console.log(hexpEmp);


// var hexpEmp=employees.reduce((e1,e2)=>e1[5]>e2[5]?e1[4]:e2[4])
// console.log(hexpEmp);

