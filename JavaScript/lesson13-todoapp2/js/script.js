let input = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");
btn.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${input.value}<button class="del">del</button></span>`;
    ol.appendChild(li);
    input.value = "";
    let list = document.querySelectorAll("li");
 
    for (let i = 0; i < list.length; i++) {
        document.querySelectorAll(".del")[i].onclick = () => {
      list[i].remove();
    }
  };

};


document.querySelector('.clearAll').onclick=()=>{
    let list = document.querySelectorAll("li");
    for(let i=0;i<list.length;i++){
        list[i].remove(); 
    }
}