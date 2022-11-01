const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let person = {
    name: "홍길동",
    age: 25,
    tall: 175
};

//Object.keys 함수로 객체를 배열로 반환 처리
const personKeys = Object.keys(person);

for (let i = 0; i < personKeys.length; i++) {
    const curkey = personKeys[i];
    const curValue = person[curkey];

    //console.log(`1 ${curkey} : ${curValue}`);
}

//Object.keys 함수로 객체를 배열로 반환 처리
const personValue = Object.values(person);

for (let i = 0; i < personValue.length; i++) {
    console.log(`${personValue[i]}`);
}
