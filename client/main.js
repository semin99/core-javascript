import { getNode, css, addClass, refError, removeClass} from "./lib/index.js"; 

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function handler(e){
  e.preventDefault();

  let firstVlaue = +getInputValue(firstInput);
  let secondVlaue = +getInputValue(secondInput);
  let total = sum(firstVlaue,secondVlaue)

  clearContents(result);

  insertLast(result, total)

}

function inputHandler(){
  let firstVlaue = +getInputValue(firstInput);
  let secondVlaue = +getInputValue(secondInput);
  let total = sum(firstVlaue,secondVlaue)

  clearContents(result);

  insertLast(result, total)
}


done.addEventListener('click', handler);

firstInput.addEventListener('change', inputHandler)
secondInput.addEventListener('change', inputHandler)