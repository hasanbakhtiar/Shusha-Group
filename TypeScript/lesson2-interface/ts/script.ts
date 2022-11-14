// interface IDatebase{
//     add();
//     get();
//     update();
//     delete();
// }

// class MySql implements IDatebase{
//     add() {
//         console.log('MySql added');
        
//     }
//     get(){
//         console.log('MySql get');
        
//     }
//     update() {
//         console.log('MySql updated');
        
//     }
//     delete() {
//         console.log('MySql deleted');
        
//     }
// }

// class MongoDB implements IDatebase{
//     add() {
//         console.log('MongoDB added');
        
//     }
//     get(){
//         console.log('MongoDB get');
        
//     }
//     update() {
//         console.log('MongoDB updated');
        
//     }
//     delete() {
//         console.log('MongoDB deleted');
        
//     }
// }
// function AddDatabase(database:IDatebase){
//     database.add();
// }
// function DeleteDatabase(database:IDatebase){
//     database.delete();
// }

// AddDatabase(new MongoDB);
// DeleteDatabase(new MySql);

// var car:string = 'red';

// var colorCar = function(color:'blue' | 'green' | 'red'):void{
//     car=color;
// }
// colorCar("blue");
// console.log(car);
