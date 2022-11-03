function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 2000);
    })

}


function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 2000);
    })

}




function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a - 1;
            resolve(res);
        }, 2000);
    })
}



const resultA = taskA(4, 2).then(res => {
    console.log("작업 A  :", res);
    return taskB(res);

})

console.log(" 중간 작업 1");

const resultB = resultA.then(res => {
    console.log("작업 B   :", res);
    return taskC(res)
})


console.log(" 중간 작업 2");


resultB.then(res => {
    console.log("작업 C   :", res);
})




console.log("코드끝");