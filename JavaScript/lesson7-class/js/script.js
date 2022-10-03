// ES5 
// function Car(brand,color){
//     this.carbrand = brand;
//     this.carcolor = color;
// }
// Car.prototype.year = 1990;

// var myCar = new Car('BMW','red');
// console.log(myCar.carcolor);
// console.log(myCar.year);

// ES6
// class Car{
//     constructor(brand,color){
//         this.carbrand = brand;
//         this.carcolor = color;
//     }
// }

// var myCar = new Car('BMW','red');
// console.log(myCar.carcolor);

// Arrow function
// const info=(a)=>{
//     return a
// }
// console.log(info("Hello"));


// const info = function(){
// }



// class Car{
//     constructor(brand,color,year){
//         this.carbrand = brand;
//         this.carcolor = color;
//         this.caryear = year;
//     }

//     calculateAge(currentTime){
//         return `car name: ${this.carbrand} is ${currentTime-this.caryear}`
//     }
// }

// class Moto extends Car{
//     constructor(brand,color,year){
//         super();
//         this.carbrand = brand;
//         this.caryear = year;
//     }
// }


// var myCar = new Car('BMW','red',2002);
// var myMoto = new Moto('yamaha','blue',2003);

// console.log(myMoto.calculateAge(2019));

// console.log(myCar.carcolor);
// console.log(myCar.calculateAge(new Date().getFullYear()));
// console.log(new Date().getFullYear());