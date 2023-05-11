// const greeting = require("./test")


// console.log(greeting.greeting[2])

// const mySchool = ["Unilag", "Lasu", "FCE", "The Curve", "Yabatech"]

// const myPromise = new Promise ((resolve,reject) => {
//     if (mySchool.includes("Unilag")){
//         resolve("Successful")
//     } else {
//         reject("Failure")
//     }
// });

// myPromise.then(
//     function(data){
//         console.log("available");
//     },
//     function(error){
//         console.log("Unavailable")
//     }
// );


// Classwork.. Reading file using the promise type of Async
const fs = require("fs");
 function theReadFunction(){
 return new Promise((resolve ,reject)=>{

    fs.readFile("./testFil.txt","utf8",(err,data)=>{
 if (data) {
    resolve(data)
 } else{
    reject(err)
 }

 
})

})
 }
theReadFunction()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})