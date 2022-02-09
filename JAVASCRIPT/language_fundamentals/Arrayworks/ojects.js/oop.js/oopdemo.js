//object oriented programming

// class => plan , design
// object => building
// reference


//example
// Class => Tv
// Objects => sony bravia TV 
      //   => play videos
      //   => change brightness, volume
 // Reference => remote          

 
// classical approach
 class Employee{

    setEmployee(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }

    printEmployee(){
        console.log(this.name,this.age,this.gender);
    }
 }

 // creating object
 // refname=new ClassName()

 var emp=new Employee()
 emp.setEmployee("ram",25,"male")
  emp.printEmployee() 

 var emp1=new Employee() 
 emp1.setEmployee("ravi",30,"male")
 emp1.printEmployee()


 // In Javascript - object creating

 var emp1={
     name:"ram",
     age:25,
     gender:"male"
 }
