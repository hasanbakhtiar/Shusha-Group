const text = document.querySelector('p');
// text.innerHTML = document.querySelector('ul').firstChild.nodeName;
// text.innerHTML = document.querySelector('ul').childNodes[0].firstChild.nodeValue;
// text.innerHTML = document.querySelector('ul').firstChild.firstChild.parentNode.nodeName;
// text.innerHTML = document.querySelector('ul').firstChild.nextSibling.firstChild.nodeValue;
const a = document.createElement('a');
const value = document.createTextNode('hello');
a.appendChild(value);
const ul = document.querySelector('ul');
const li = document.querySelector('li');
ul.insertBefore(a,li);

