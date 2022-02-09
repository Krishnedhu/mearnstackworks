// class Course{
//     setCourseDetails(c_name,fee,duration){
//         this.courseName=c_name;
//         this.fees=fee;
//         this.duration=duration;
//     }

//     printCourseDetails(){
//         console.log(this.courseName,this.fees,this.duration);
//     }
// }

// // object/instance
// var ms=new Course()
// ms.setCourseDetails("mearnstack",50000,5)
// ms.printCourseDetails()

// var dj=new Course()
// ms.setCourseDetails("django",45000,5)
// ms.printCourseDetails()


// create a new class Student setStudent(rol,st_name,course,total) printDetails()


// class Student{
//     setStudent(rolno,st_name,course,total){
//         this.rolno=rolno;
//         this.name=st_name;
//         this.course=course;
//         this.total=total;
//     }

//     printStudent(){
//         console.log( this.rolno,this.name,this.course,this.total);
//     }
// }

// var st=new Student()
//  st.setStudent(101,"Hari","ms",450)
//   st.printStudent() 

  //variables are prepended with this => instance variables
  //initializing instance variable
  //constructor =>initializing instance variable

//constructor in python __init__()
//constructor in java same as classname()
//constructor in javascript constructor()

// Example 
class Student{
constructor(rolno,st_name,course,total){
        this.rolno=rolno;
        this.name=st_name;
        this.course=course;
        this.total=total;
}
printStudent(){
    console.log( this.rolno,this.name,this.course,this.total);
}
}

var st=new Student(101,"Hari","ms",450)
st.printStudent() 


//constructor
//duty=>initializing instance variables
//automatically invoked while creating object

