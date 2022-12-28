

// 데이터 → 문자------------------------------------------

//number -> '2022'
const YEAR = '2022';
console.log(String(YEAR));

// undefined -> 'undefined'
// null -> 'null'

let days = null;

console.log(String(undefined));
console.log(String(null));

//boolean -> 'true' or 'false'
let isKind = true;
console.log(isKind + '');


// 데이터 → 숫자------------------------------------------

// Number()

//undefined -> NaN
console.log(Number(undefined));

//null -> 0
let money = null;
console.log(Number(money));

//boolean -> true : 1 / false : 0 숫자형으로 변환됨
let cutie = false;
console.log(+cutie);
console.log(cutie / 1);
console.log(cutie * 1);

//String 숫자형 문자
let num = '      123      ';
console.log(num * 1);

// nemeric string
let width = '32.24231px';

console.log(parseFloat(width,10));

// 데이터 -> 블리언 ----------------------------------------

//null, underfiend, 0, NaN, '' -> false
//위에 나열한 것 이외의 것들

console.log(Boolean(123));
console.log(!null);  /* !는 부정을 뜻함 */