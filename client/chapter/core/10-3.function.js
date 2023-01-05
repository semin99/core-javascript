/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */
/* 
let arr = [1,2,3,4];

function sum(...args){

  console.log(args);
}
 */


// sum(1,2,3,4,)
// rest parameter
const calculateTotal = (...args) => {

  
  let total = 0;

  args.forEach(item=>{

    total += item
    
  })
  

  // args.reduce((acc,item)=> acc + item )
  // console.log();
  
  return total;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;


// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = function (numeric, powerCount) {
  let result = 1;
  for(let i=0; i<powerCount; i++){
    result *= numeric
  }
  return result;
}; 

// pow(2,53) //9007199254740992

// repeat(text: string, repeatCount: number): string;
let repeat = function (text, repeatCount) {
  let result = '';
  for(let i=0; i<repeatCount; i++){
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount)=> Array(repeatCount).fill(null).reduce(acc=> acc + text,'')

repeat('hello', 3) //hello hello hello

repeatExpression('hello', 2)











