let a = "string";

if (a) {
    console.log("true");
} else {
    console.log("false");
}


const getName = (person) => {

    if (!person) {
        return "객체가 아닙니다";
    }
    return person.name;
}

let person = { name: "홍길동" };
const name = getName(person);
console.log(name);

