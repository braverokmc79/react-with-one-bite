let person1 = new Object();
let person2 = {}; // 객체 리터럴 방식
const person3 = {
    key: "value", //프로퍼티 (객체 프로퍼티)
    key1: "value2",
    name: "홍길동",
    say: function () {
        console.log("안녕");
    } //메서드 ->방법
}; //객체 리터럴 방식

console.log(getPropertyValue("name"));
console.log(getPropertyValue2("name"));

function getPropertyValue(key) {
    return person3[key];
}
function getPropertyValue2(key) {
    return person3.key;
}

//출력
// 홍길동
// value

person3.age = 31;
console.log(person3);

//객체 삭제
person3.key1 = null;
console.log(person3);

console.log(`name : ${"name" in person3}`);
