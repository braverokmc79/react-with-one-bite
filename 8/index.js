let a = 3;

if (a >= 7) {
    console.log("7이상입니다.");
} else if (a >= 5) {
    console.log("5이상입니다.");
} else {
    console.log("5 미만입니다.");
}


let country = "ko";
switch (country) {
    case "ko":
        console.log("한국");
        break;
    case "cn":
        console.log("중국");
        break;
    case "jp":
        console.log("일본");
        break;
    default:
        break;
}