// 인터페이스는 상호 간의 정의한 약속 혹은 규칙을 의미

interface User {
    age: number;
    name: string;
}


// 변수에 활용한 인터페이스
var seho: User = {
    age: 22,
    name: '재훈'
}


// 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user)
}
const bh = {
    name: 'byeolhee',
    age: 25,
}
getUser(bh);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}


// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'


// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value) {
    console.log(value, obj[value]);
});


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// interface Developer {
//     name: string;
//     age: number;
//     language: string;
// }

interface Developer extends Person {
    language: string;
}

var kbh: Developer = {
    name: '별희',
    age: 25,
    language: 'TypeScript',
}