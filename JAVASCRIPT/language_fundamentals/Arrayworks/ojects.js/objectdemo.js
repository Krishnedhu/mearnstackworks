var expenses={
    jan:10000,
    feb:20000,
    mar:30000,
    apr:35000,
    may:40000,
    jun:50000
}

var employee={
    id:1000,
    emp_name:"ravi",
    desig:"developer",
    salary:25000,
    exp:1
}

for(let key in employee){
    console.log(key);
    console.log(employee[key]);
}


var arr=[10,0,30]
for(let pos in arr){
    console.log(pos);
}
// employee.salary+=5000
// console.log(employee);

// print emp name
// console.log(employee.emp_name);
// console.log(employee.salary);

//checking a property exists in object
// console.log("exp"in employee);
// console.log("gender" in employee);

//add a new value
// employee["gender"]="male"
// console.log(employee);

//student object rol,name,course,total
// var student={
//     rol:101,
//     st_name:"arun",
//     course:"mearn",
//     total:450
// }


// console.log(student.st_name);
// console.log(student.course);
//  console.log("gender" in student);
// student["gender"]="male"
//  console.log(student);
// student.isVaccinated=true
// console.log(student);
// student.vaccine="covishield"
// console.log(student);
//updating a value
// student.vaccine="co-vaxin"
// console.log(student);
// student.total=400
// console.log(student);
// student.total+=50
// console.log(student);