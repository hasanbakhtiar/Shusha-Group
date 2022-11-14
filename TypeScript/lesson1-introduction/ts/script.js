// var info:number = 5;
// console.log(info);
// let infoArr:Array<any> = [1,3,4,5,6,"hello"];
// let infoArr:number[] = [1,3,4,5,6];
// console.log(infoArr);
// function infoFunc(a:number,b?:number){
//     return a;
// }
// console.log(infoFunc(5));
// function data(count:number){
//     return count;
// }
// function info(a:number,b:number):void{
//     let c = a+b;
//     console.log(data(c));
// }
// info(10,20);
// class Person{
//     protected iname:string;
//     private isurname:string;
//     public iage:number;
//     constructor(name:string,surname:string,age:number){
//         this.iname=name;
//         this.isurname=surname;
//         this.iage=age;
//     }
//     sayHi(){
//         return this.iname +" "+ this.isurname + " " + this.iage;
//     }
// }
// class Data extends Person{
//     constructor(name:string,surname:string,age:number){
//         super(name,surname,age);
//     }
// }
// const newPerson = new Person("Jone","Morgan",39);
// console.log(newPerson.sayHi());
// // console.log(newPerson.iname);
var rowList = document.querySelector('.row');
fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (dt) {
    var card = "";
    dt.map(function (fd, i) {
        card += "<div class=\"col-12 col-sm-6 col-md-4 g-3\">\n        <div class=\"card\" >\n        <img  src=".concat(fd.image, " class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(fd.title, "</h5>\n          <p class=\"card-text\">").concat(fd.description, "</p>\n          <a href=\"#\" class=\"btn btn-primary\">Add to card</a>\n        </div>\n      </div>\n        </div>");
    });
    rowList.innerHTML = card;
});
// var info :{
//     name:string,
//     surname:string,
//     age:number,
//     married:boolean
// }
// info = {
//     name:"Jhone",
//     surname:"Morgan",
//     age:25,
//     married:true
// }
