// document.querySelector('button').onclick=()=>{
        // document.querySelector('h1').classList.add('red');
        // document.querySelector('h1').classList.remove('red');
        // document.querySelector('h1').classList.toggle('red');

// }

document.querySelector('button').onclick = ()=>{
    if (document.querySelector('#box').className == 'show') {
        document.querySelector('#box').className = 'hide'
    }else{
        document.querySelector('#box').className = 'show'
    }
}