let [one, twoo, three, four = "four1"] = ["one", "two", "three"];
console.log(one, twoo, three, four);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

let object = { one1: "11", two2: "22", three3: "33" };

let { one1, two2, three3, f4 = "55" } = object;

console.log(one1, two2, three3, f4);
