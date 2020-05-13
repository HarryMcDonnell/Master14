const wrapper = document.getElementById('wrapper');

let myDiv = document.createElement('div');
myDiv.id = "box";

let text = document.createTextNode('JS');

myDiv.appendChild(text);
wrapper.appendChild(myDiv);

myDiv.textContent = "CSS";

console.log(myDiv);
// myDiv.classList.add('class1', 'class2');
// myDiv.classList.remove();
// myDiv.classList.toggle();
