const ol = document.querySelector('ol');
document.querySelector('button').onclick = ()=>{
    let li = document.createElement('li');
    li.innerHTML = document.querySelector('input').value;
    ol.appendChild(li);
    document.querySelector('input').value= "";
    li.onclick=()=>{
        li.style.textDecoration = 'line-through'
    }
    li.ondblclick=()=>{
        li.remove();
    }
}