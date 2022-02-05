// Enums: 특정 값들의 집합을 의미하는 자료형이다.

// 숫자형 Enum : 초기값을 주지 않으면 0부터 차례로 1씩 증가한다.
enum Shoes {
    Nike, // 0
    Adidas, // 1
    Canvas // 2
}

var myShoes = Shoes.Nike; 
console.log(myShoes); // 0


// 문자형 Enum 
enum Shoes2 {
    Nike = 'nike',
    Adidas = 'adidas',
}

var yourShoes = Shoes2.Nike;
console.log(yourShoes); // nike


// 활용
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes ) {
        console.log('정답');
    }
    if (answer === Answer.No) {
        console.log('오답');
    }
}
askQuestion(Answer.Yes);
askQuestion('Yes'); // Error