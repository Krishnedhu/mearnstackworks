// var baleno={
//     manufacture:"nexa",
//     price:10,
//     varients:["manuel"],
//     color:["red","blue"],
//     breaks:"abs",
// }

// var glanza={
//     manufacture:"toyota",
//     price:12,
// }
// glanza.__proto__= baleno

// console.log(glanza.manufacture);
// console.log(glanza.varients);









// example 2

// var language={
//     baseName:"javascript",
//     type:"interpreted",
//     version:"ES10"
// }

// var framework={
//     name:"express"
// }

// framework.__proto__=language
// console.log(framework.version);
// console.log(framework.name);
// console.log(framework.type);


//example 3

var samsungA52={
    brand:"samsung",
    price:24000,
    band:"4g",
    display:"amoled",
    processor:"snapdragon",
    getPrice(){
        return this.price
    },
    getBand(){
        return this.band
    }

}

var samsungA52s={
    price:34000,
    band:"5g"
}

samsungA52s.__proto__ =samsungA52
// console.log(samsungA52s.display);

// console.log(samsungA52.getPrice());
console.log(samsungA52s.getPrice());
console.log(samsungA52s.getBand());
