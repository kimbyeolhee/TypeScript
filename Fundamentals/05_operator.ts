function logMessage(value: string) {
    console.log(value);
}

logMessage('Hello TypeScript');
logMessage(100); // Error


// Union Type : 자바스크립트의 OR 연산자 의미의 타입
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);


// Uniton Type의 특징
interface Dev {
    name: string;
    skill: string;
}

interface personalInfo {
    name: string;
    age: number;
}

function askSomeone(someone: Dev | personalInfo) {
    someone.name; // 인터페이스의 Union type 선언은 공통된 속성만 접근할 수 있다.
    someone.skill; // Error
    someone.age; // Error
}


// Intersection Type : 자바스크립트의 AND 연산자 의미의 타입
function askSomebody(someone: Dev & personalInfo) {
    someone.name;
    someone.skill; // Ok 
    someone.age; // Ok
}

// Union Type과 Itersection Type의 차이
// Union Type은 함수 내부 선언에서는 타입 추론이 필요하지만 넘기는 타입에서는 선택지가 생긴다. 
askSomeone({ name: '별희', skill: 'typescript' }); // 선택적으로 인자 선언이 가능하다.
askSomeone({ name: '재훈', age: 23})

askSomebody({ name: '별희', skill: 'typescript', age: 25 }); // 세 인자를 모두 선언해야한다.