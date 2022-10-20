// duymenin baslangici
let startCount = 0;
// duymenin bitisi
let endCount = 50;
// row classinda olan tagi tutmaq
const row = document.querySelector(".row");
// buttonlar
const btn = document.querySelectorAll("button");

// ===================================================================
// apidan melumatlari ceken funksiya
const countryFetch = () => {
  // apiyi cekmek
  fetch("https://restcountries.com/v3.1/all")
    //   gelen datani json formatindan objecte cevirirem
    .then((res) => res.json())
    //   sonra gelen datani cardima elave edirem
    .then((data) => {
      // card ucun variable
      let card = "";
      //   gelen datani map ile dondururem
      //   burada map evezine for isledecem ki evveli ve sonu teyin ede bilim

      for (let x = startCount; x < endCount; x++) {
        card += ` <div class="card" style="width: 15rem;">
                      <img src=${
                        data[x].flags.png
                      } class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title"><span class="text-danger">${
                          x + 1
                        }</span>${data[x].name.common}</h5>
                        <p class="card-text">${data[x].capital}</p>
                      </div>
                    </div>`;
      }

      //   data.map((fd) => {
      //     // sonra card variablena cardi elave etdim
      //     card += ` <div class="card" style="width: 15rem;">
      //               <img src=${fd.flags.png} class="card-img-top" alt="...">
      //               <div class="card-body">
      //                 <h5 class="card-title">${fd.name.common}</h5>
      //                 <p class="card-text">${fd.capital}</p>
      //               </div>
      //             </div>`;
      //     console.log(data);
      //   });
      //   sonra ise cardimi classi row olan taga elave etdim
      row.innerHTML = card;
    });
};
// burada funksiyami cagiriram
countryFetch();


btn[0].onclick = () => {
  // duymenin baslangici
  startCount = 0;
  // duymenin bitisi
  endCount = 50;
  countryFetch();
};

btn[1].onclick = () => {
    // duymenin baslangici
    startCount = 50;
    // duymenin bitisi
    endCount = 100;
    countryFetch();
  };
  
  btn[2].onclick = () => {
    // duymenin baslangici
    startCount = 100;
    // duymenin bitisi
    endCount = 150;
    countryFetch();
  };
  
  btn[3].onclick = () => {
    // duymenin baslangici
    startCount = 150;
    // duymenin bitisi
    endCount =  200;
    countryFetch();
  };

    
  btn[4].onclick = () => {
    // duymenin baslangici
    startCount = 200;
    // duymenin bitisi
    endCount =  250;
    countryFetch();
  };
