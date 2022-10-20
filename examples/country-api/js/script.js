// row classinda olan tagi tutmaq
const row = document.querySelector(".row");
// buttonlar
const btn = document.querySelectorAll("button");

// apidan melumatlari ceken funksiya
const countryFetch = () => {
  // apiyi cekmek
  fetch('https://restcountries.com/v3.1/all')
//   gelen datani json formatindan objecte cevirirem
  .then(res=>res.json())
//   sonra gelen datani cardima elave edirem
.then(data=>{
  // card ucun variable
  let card = "";
//   gelen datani map ile dondururem 
 data.map((fd)=>{
     // sonra card variablena cardi elave etdim
  card += ` <div class="card" style="width: 15rem;">
  <img src=${fd.flags.png} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${fd.name.common}</h5>
    <p class="card-text">${fd.capital}</p>
  </div>
</div>`;
console.log(data);
 })
   //   sonra ise cardimi classi row olan taga elave etdim
   row.innerHTML = card;
})



};
// burada funksiyami cagiriram
countryFetch();
