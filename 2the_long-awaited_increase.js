process.stdin.resume();

process.stdin.on('data', (data) => {
    const numbers = String(data).trim().split(' ').map(Number);
    let numbersSumm = 0;

    for (const number of numbers) {
        numbersSumm += number;
    }

    console.log(numbersSumm);
});
