import * as data from './data.js';

// let card = "";
// data.product.map((comingdata)=>{
//         card += `
//         <div class="card" style="width: 18rem;">
//         <img src="${comingdata.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${comingdata.title}</h5>
//           <p class="card-text">${comingdata.description.substring(0,10)}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//         `
//         document.querySelector('.row').innerHTML = card;
//     });


// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(data=>{
//                 let card = "";
//                 data.map((comingdata)=>{
//                             card += `
//                             <div class="card" style="width: 18rem;">
//                             <img src="${comingdata.image}" class="card-img-top" alt="...">
//                             <div class="card-body">
//                               <h5 class="card-title">${comingdata.title}</h5>
//                               <p class="card-text">${comingdata.description.substring(0,10)}</p>
//                               <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                           </div>
//                             `
//                         });
//                         document.querySelector('.row').innerHTML = card;
//             });

//             fetch('https://restcountries.com/v3.1/all')
//             .then(res=>res.json())
//             .then(data=>console.log(data))