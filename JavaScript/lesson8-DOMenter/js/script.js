const text = document.querySelector('h1');
const btn = document.querySelector('button');

btn.onclick = ()=>{
    if (text.innerHTML == 'Azerbaijan') {
        text.innerHTML = "Baku";
    }else{
        text.innerHTML = 'Azerbaijan'
    }
}