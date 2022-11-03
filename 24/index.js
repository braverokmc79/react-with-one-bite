function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ok")
        }, ms);
    })
}


async function helloAsync() {
    const result = await delay(2000);
    return `hello Async  ${result}`;

}


async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();