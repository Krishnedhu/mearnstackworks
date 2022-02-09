var products=[
    [100,"oreo", 40, 50],
    [101,"goodday", 30, 50],
    [102,"hidenseek", 50, 0],
    [103,"moms", 20, 10],
    [104,"treat", 70, 5],
    [105,"oreo", 50, 80],
    [106,"oreo", 70, 50],

]

//q1 print costly product detail- reduce()
// var costlyProduct=products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
// console.log(costlyProduct);

//q2 print outofstock products - filter()
// var outOfStockProducts=products.filter(P=>[3]==0)
// console.log(outOfStockProducts);

//q3 print oreo details - find()
// var oreoDetail=products.find(p=>p[1]=="oreo")
// console.log(oreoDetail);

//q4 sort products based on available stock order by desc - sort()
// products.sort((p1,p2)=>p2[3]-p1[3])
// console.log(products);

//q5 print product details having maximum available stock - reduce()
// var lowSellingproduct=products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
// console.log(lowSellingproduct);

//some()
// var isAvailable=products.some(p=>p[2]==10)
// console.log(isAvailable);


//some()
// is there any product with available stock greater than 100
// var isPresent =products.some(p=>p[3]>50)
// console.log(isPresent);

//is there any products available in range(10-20)
// var isAvailable=products.some(p=>p[2]>=10 && p[2]<=20)
// console.log(isAvailable);

//print all products available in range(10-20)
// var isAvailable=products.some(p=>p[2]>=10 && p[2]<=20)
//  console.log(isAvailable);

 //print all products available in range (10-20)
//  var rangeProducts=products.filter(p=>p[2]>=10 && p[2]<=20)
//  console.log(rangeProducts);

//forEach()
products.forEach(p=>console.log(p[2]))

Array.forEach(num=>log)





// console.log(products.map(item=>item[1]));
//list of biscuts available under rs 50
// console.log(products.filter(item=>item[2]<50));
// console.log(products.find(data=>data[1]=="oreo")[2]);
// console.log(products.filter(data=>data[1]=="oreo"));
// console.log(products.find(data=>data[1]=="oreo" && data[2] !=40));
