// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// Number
let num: number = 10;

// Array
let arr: Array<number> = [1,2,3]; //제네릭 사용
let arr2: Array<string> = ['a','b','c'];
let arr3: number[] = [1,2,3];

// Tuple : 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let address: [string, number] = ['판교', 40];

// Object
let obj: object = {};
// Object를 더 구체적으로 정의 (속성의 타입까지 정의)
let person: object = {
     age: 25, 
     name: 'kbh' 
};
let person2: {name: string, age: number} = {
    name: 'kbh',
    age: 25
};

// Boolean
let show: boolean = true;

