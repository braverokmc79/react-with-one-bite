let a = 3;

a >= 0 ? console.log("양수") : console.log("음수");

let b = [];

const arrayStatus = b.length === 0 ? "빈배열" : "안 빈 배열";
console.log(arrayStatus);


//중첩 삼항 연산자
//ToDO :학점 계산 프로그램
//90점 이상 A+
//50점 이상 B+
//둘다 아니면 F
let score = 100;

score >= 90
    ? console.log("A+")
    : score > 50
        ? console.log("B+")
        : console.log("F");