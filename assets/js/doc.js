//1.변수,함수,데이터타입(string,array...),연산자,전역변수,지역변수,매개변수,스코프,함수활용

/* var */
/*

*/
/*

*/
/*

*/
/* function */



/* 변수의 선언 : var(변수의선언) 변수명 = 데이터값 형식으로 이루어짐 */

/*
Boolean
논리적인 요소를 나타내며 true와 false 두가지 값을 가질 수 있다.
*/
var booleanType = true;//true or false

/* null : null 타입은 딱 한 가지 값, null 을 가질 수 있다.*/
var nullTest = 'test';
nullTest = null; // 값 또는 참조 정보가 제거됨

/* undefined : 값을 할당하지 않은 변수는 undefined 값을 가진다. 즉, 선언은 되었지만 할당된 적이 없는 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 반환된다. */
var undefinedTest;
console.log(undefinedTest); // undefined

/* Number : C 언어의 경우, 정수형과 실수형을 구분하여 int, long, float, double 등과 같은 다양한 숫자 자료형이 존재한다. 하지만 자바스크립트는 하나의 숫자 자료형만 존재한다. */
var x = 10;    // 정수
var y = 10.12; // 실수
var z = -20;   // 음의 정수

/* String : String(문자열) 타입은 텍스트 데이터를 나타내는데 사용한다.
문자열은 작은 따옴표(‘’) 또는 큰 따옴표(“”) 안에 텍스트를 넣어 생성한다. */
var stringTest = "stringType";


/* Object (객체형, 참조형)
 객체는 데이터와 그 데이터에 관련되는 동작(절차,방법,기능)을 모두 포함할 수 있는 개념적 존재이다.
 객체(object)기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”은 객체이다. 기본자료형(Primitives)을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체이다.
*/
var objectType = {str1:"1",str2:"2"};
console.log(objectType.str1); // "1"

var arrayType = ["1",2,3,4,"5"];
console.log(arrayType); // "1",2,3,4,"5"

/* selector */
document.getElementById('id');
document.getElementsByTagName('name');
document.getElementsByClassName('name');









/*글로벌 영역에 변수를 선언하면 이 변수는 어느 곳에서든지 참조할 수 있는 global scope를 갖는 전역 변수가 된다.*/

var globalVar = "전역변수"; //전역변수 선언 (스크립트내 제한없이 호출가능)

/*로컬 영역에 변수를 선언하면 이 변수는 해당함수 내부에서만 사용할수있는 local scope를 갖는 지역 변수가 된다.*/
function localVarTestFunctino(){
    var localVar = "지역변수"; //지역변수 선언 (함수 내부에서만 사용가능)
}

console.log(globalVar); // "전역변수" 출력
console.log(localVar); // Uncaught ReferenceError: test is not defined 에러메세지 출력


/*변수의 참조 : 로컬영역에 선언한 변수는 전역변수에 참조하여 활용할수있다*/

var globalVar = "전역변수";

function localVarTestFunctino(){
    var localVar = "지역변수";
    globalVar = localVar;//글로벌영역 변수에 로컬변수를 참조
}

console.log(globalVar); // "지역변수"  출력











