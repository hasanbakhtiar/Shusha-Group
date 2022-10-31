// let myWindow;
// document.querySelectorAll('button')[0].onclick = ()=>{
//     myWindow= window.open('../other.html',"","width=300, height=300")
// }

// document.querySelectorAll('button')[1].onclick = ()=>{
    // myWindow.close();
    // myWindow.moveTo(500, 100);
    // myWindow.resizeTo(1300, 1300)
//  }



// document.querySelector('span').innerHTML = screen.height;
// document.querySelector('span').innerHTML = screen.width;
// document.querySelector('span').innerHTML = screen.availHeight;
// document.querySelector('span').innerHTML = screen.availWidth;
// document.querySelector('span').innerHTML = screen.colorDepth;
// document.querySelector('span').innerHTML = screen.pixelDepth;


// document.querySelector('span').innerHTML = window.location.host;
// document.querySelector('span').innerHTML = window.location.pathname;
// document.querySelector('span').innerHTML = window.location.hostname;
// document.querySelector('span').innerHTML = window.location.port;
// document.querySelector('span').innerHTML = window.location.protocol;
// document.querySelector('span').innerHTML = window.location.assign('https:google.com');


// document.querySelector('button').onclick=()=>{
//     history.forward();
// }
// document.querySelector('span').innerHTML = navigator.platform;
// document.querySelector('span').innerHTML = navigator.language;
// document.querySelector('span').innerHTML = navigator.appVersion;
// alert("hello");
// window.alert('hello');
// window.prompt()
// window.prompt("Hello","mello");


setTimeout(()=>{
    document.querySelector('#loading').className = "hide";
    document.querySelector('#main-page').className = "show";
},100)

// 1000ms  = 1s
const interval = setInterval(() => {
    document.querySelector('h2').innerHTML = new Date();
}, 1000);

document.querySelector('button').onclick = ()=>{

    clearInterval(interval);
}
// setInterval(() => {
//     document.write('hello');
// }, 1000);
// setTimeout(() => {
//     document.write('hello');
    
// }, 1000);