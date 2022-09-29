// import {car,info} from '../data/cars.js'
import * as data from '../data/cars.js'
import * as fd from '../homeworkdata.js'
console.log(data.car);
console.log(data.info);
data.myFunc(10,20);

function myProduct (productname){

for(let x in fd.data){
    if (fd.data[x].category == "electronics") {
        console.log(fd.data[x].price);
    }
}
}

myProduct()
