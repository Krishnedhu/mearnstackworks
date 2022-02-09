var baleno={
    name:"baleno",
    model:"hatchback",
    manufacture:"maruti",
    price:"10lac"
}

console.log(baleno.manufacture);
if("model" in baleno){
    console.log(baleno.model);
}
baleno.varient=["manual"]
console.log(baleno);
baleno.varient.push("automatic")
console.log(baleno.varient);
baleno.color=["red"]
console.log(baleno);
baleno.color.push("blue")
console.log(baleno.color);