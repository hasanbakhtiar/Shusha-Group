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



var rowList = document.querySelector<HTMLUListElement>('.row');

fetch('https://fakestoreapi.com/products')
 .then((res:any)=>res.json())
 .then((dt:any)=>{
    let card:string ="";
    dt.map((fd:any,i:number)=>{
        card+= `<div class="col-12 col-sm-6 col-md-4 g-3">
        <div class="card" >
        <img  src=${fd.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${fd.title}</h5>
          <p class="card-text">${fd.description}</p>
          <a href="#" class="btn btn-primary">Add to card</a>
        </div>
      </div>
        </div>`
    });
    rowList.innerHTML = card;
})

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