interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {
        name: 'John',
        age: 30,
        skill: 'Typescript'
    };
}
var john = introduce();
console.log(john.skill); //Error => Union을 사용하면 공통된 속성만 접근할 수 있어서 skill은 없는 것으로 간주 

if ((john as Developer).skill) {  // 타입을 구체화 시켜나가는 방법
    console.log((john as Developer).skill);  // as를 쓰니 가독성이 떨어진다.
} else if ((john as Person).age) { 
    var age = (john as Person).age;
    console.log(age);
}


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(john)) {
    console.log(john.skill)
} else {
    console.log(john.age)
}
