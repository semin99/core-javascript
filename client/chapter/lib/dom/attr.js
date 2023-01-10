// get 함수 만들기

function getAttr(node, name){

  if(typeof node === 'string'){
    node = getNode(node);
  }

  return node.getAttribute(name)

}

// getAttr('.first', 'class')

// set 함수 만들기

function setAttr(node, name, value){
  //validation 벨리데이션 : 확인
  if(typeof node === 'string') node = getNode(node);
  if(typeof name !== 'string') throw new TypeError('setAttr 함수의 두번째 인자는 문자 타입 이어야 합니다.')
  if (name.includes("data")) {
    let rest = name.slice(5);
    node.dataset[rest] = value;
  }
  if(!value) throw new TypeError('setAttr 함수의 세 번째 인자는 필수값입니다.')
  
  node.setAttribute(name, value);
}

// setAttr('.first', 'data-value', 'hello')


//common 함수 만들기

// const attr = (node, name, value) => !value ? getAttr(node, name) : setAttr(node, name, value);

function attr(node, name, value){
  /* if(!value){
    return getAttr(node, name)
  }else{
    setAttr(node, name, value)
  } */
  return !value ? getAttr(node, name) : setAttr(node, name, value);
}