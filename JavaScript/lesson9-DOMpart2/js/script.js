import * as data from './lang.js';
const langBtn = document.querySelector('.lang-btn');
const langItems = document.querySelectorAll('.nav-link');
const nav  =  document.querySelector('nav');

const multiLang = () =>{
  if (langBtn.innerHTML == "AZ") {
    langBtn.innerHTML = "EN"
    for(let x = 0; x < data.langData.az.length ;x++){
        langItems[x].innerHTML = data.langData.az[x];
    }

  }else{
    langBtn.innerHTML = "AZ"
    for(let x = 0; x < data.langData.en.length ;x++){
        langItems[x].innerHTML = data.langData.en[x];
    }
  }
}

langBtn.onclick = multiLang;

document.querySelector('.mode').onclick = () =>{
    if (document.querySelector('.mode').innerHTML == 'Light') {
        document.querySelector('.mode').innerHTML = 'Dark';
        nav.attributes[0].value = "navbar navbar-expand-lg bg-light navbar-light";
    }else{
        document.querySelector('.mode').innerHTML = 'Light';
        nav.attributes[0].value = "navbar navbar-expand-lg bg-dark navbar-dark";
    }
}













// const btn = document.querySelector('button');
// const text = document.querySelector('h1');


// const changeText = ()=>{
//     text.innerHTML = "Mello"
// }

// btn.addEventListener('click',changeText);


// btn.addEventListener('click',function(){});



