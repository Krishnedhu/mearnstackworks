var arr=[10,20,30,40]



class Parent{
    bike(){
        console.log("passion pro");

    }
}
class Child extends Parent{
    bike(){ //method overridding
    console.log("highness");  
}
}
 var ch=new Child()
 ch.bike()

 