// let products = [
//     {   
//         id : 1,
//         price : "1769",
//         name : "Shoe 1",
//         image : "./images/1.jpg"
//     },
//     {
//         id : 2,
//         price : "2499",
//         name : "Shoe 2",
//         image : "../images/2.jpg"
//     },
//     {
//         id : 3,
//         price : "2999",
//         name : "Shoe 3",
//         image : "../images/3.jpg"
//     },
//     {
//         id : 4,
//         price : "3499",
//         name : "Shoe 4",
//         image : "../images/4.jpg"
//     },
//     {
//         id : 5,
//         price : "599",
//         name : "Shoe 5",
//         image : "../images/5.jpg"
//     },
//     {
//         id : 6,
//         price : "1999",
//         name : "Shoe 6",
//         image : "../images/6.jpg"
//     },

// ]

// export default products


// var users = [
//     {id : 1 , name : "fb"},
//     {id : 2 , name : "apple"},
//     {id : 3 , name : "google"},
// ]

// users.sort((a,b) => (a.name > b.name ? -1 : 1))

// // console.log(users)

// const a = {
//     b : 1

// }

// let c = a;
// a.b = 2
// // console.log(c)


// const a = 1 + 10
// const b = "1" + "1"
// console.log(a == b)
// console.log(a === b);


// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();



// Polyfill for call, apply , bind ()

// polyfill for call

function myCall (obj) {
    
    obj.myInfo = this;

    console.log(obj.myInfo());

}


function myApply (obj , ...args) {
    console.log(args);
    obj.myInfo = this;

    console.log(obj.myInfo(...args));

}

function myBind (obj) {
    // console.log(this , obj)
    let that = this;
    return function () {
        that.call(obj)
    }
}

Function.prototype.myCall = myCall;
Function.prototype.myApply = myApply;
Function.prototype.myBind = myBind;

let person = {
    name : "ashish",
    age : 20,
    city : "Delhi"
}

let person2 = {
    name : "Amit",
    age : 23,
    city : "Mumbai"
}

function getInfo (country , continent) {
    console.log(`${this.name} is ${this.age} years old and is from ${this.city} ${country} ${continent}`)
}

// getInfo.myCall(person)
// getInfo.myCall(person2)
// getInfo.myBind(person2)()
// getInfo.myBind(person)()
// getInfo.myBind(person)()
// getInfo.myApply(person , ["India" , "Asia"])
// getInfo.myApply(person , "India" , "Asia")



// polyfill for map

// let products = ["Shirts" , "Jeans" , "Shoes"];


// let xlProducts = products.map(p => p + " XL")
// console.log(xlProducts)

// function myMap (cb) {
    
//     let that = this;
//     let result = [];
//     that.forEach(p => result.push(cb(p)))

//     console.log(result);
//     return result;
    
// }

// Array.prototype.myMap = myMap

// let xlProducts = products.myMap(p => p + " XL")
// console.log("Result is" ,  xlProducts)
