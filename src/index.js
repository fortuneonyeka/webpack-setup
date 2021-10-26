import _ from 'lodash';
import './style.css';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button')
  btn.innerHTML = 'submit'
  

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
console.log('I get called from print.js!');
console.log('I get called from print.js!');
const btn = document.createElement('button')
  btn.innerHTML = 'submit'
  document.body.appendChild(btn)