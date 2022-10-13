// document.querySelector('button').onclick=()=>{
        // document.querySelector('h1').classList.add('red');
        // document.querySelector('h1').classList.remove('red');
        // document.querySelector('h1').classList.toggle('red');

// }

// document.querySelector('button').onclick = ()=>{
//     if (document.querySelector('#box').className == 'show') {
//         document.querySelector('#box').className = 'hide'
//     }else{
//         document.querySelector('#box').className = 'show'
//     }
// }



const lightModeClassName = 'navbar navbar-expand-lg bg-light navbar-light';
const darkModeClassName = 'navbar navbar-expand-lg bg-dark navbar-dark';
const modeBtn = document.querySelector('.mode');
const nav = document.querySelector('nav');



if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode',lightModeClassName);
    
}else{
    modeBtn.onclick = ()=>{
        if (nav.className == lightModeClassName) {
          localStorage.setItem('mode',darkModeClassName);
          nav.className = localStorage.getItem('mode');
        }else{
            localStorage.setItem('mode',lightModeClassName);
          nav.className = localStorage.getItem('mode');
    
    
        }
    }
}
nav.className = localStorage.getItem('mode');
// lang


const lang = {
    az:['ana sehife','haqqimizda','xidmetler','meqale','elaqe'],
    en:['home','about','services','blog','contact']
}

document.querySelector('#lang').onclick = () =>{
    if (document.querySelector('#lang').innerHTML =="AZ") {
        document.querySelector('#lang').innerHTML ="EN"
        localStorage.setItem('lang',lang.az);  
        for( x in lang.az){
            document.querySelectorAll('.nav-link')[x].innerHTML = lang.az[x];
        } 
    }else{
        localStorage.setItem('lang',lang.en);   
        document.querySelector('#lang').innerHTML ="AZ"
        for( x in lang.en){
            document.querySelectorAll('.nav-link')[x].innerHTML = lang.en[x];
        } 
    }
}
for( x in lang.az){
    document.querySelectorAll('.nav-link')[x].innerHTML = localStorage.getItem('lang').split(',')[x]
}




// localStorage.setItem('a','value1');
// localStorage.setItem('b','value2');

// document.querySelector('h1').innerHTML = localStorage.getItem('text')
// localStorage.removeItem('a')

// localStorage.setItem();
// localStorage.getItem();
// localStorage.removeItem();
// localStorage.clear();