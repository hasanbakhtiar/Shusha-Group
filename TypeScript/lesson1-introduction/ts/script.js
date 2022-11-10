// var info:number = 5;
// console.log(info);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }
    Person.prototype.sayHi = function () {
        return this.iname + " " + this.isurname + " " + this.iage;
    };
    return Person;
}());
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data(name, surname, age) {
        return _super.call(this, name, surname, age) || this;
    }
    return Data;
}(Person));
var newPerson = new Person("Jone", "Morgan", 39);
console.log(newPerson.sayHi());
console.log(newPerson.iname);
