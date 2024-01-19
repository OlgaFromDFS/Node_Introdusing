process.stdin.resume();

const STOP_WORD = 'flűggåənk∂€čhiœβøl∫ên';
const WONDER_WORD = 'флюгегехаймен'; 

process.stdin.on('data', (data) => {
    const word = String(data).toLowerCase().trim();

    if (word === STOP_WORD) {
        console.log('Вы ввели стоп-слово.');

        process.exit(0);
    } 
    
    if (word === WONDER_WORD) {
        console.log(`ВНЕСИТЕ ${WONDER_WORD.toUpperCase()}!!!`);

        process.exit(0);
    }

    console.log('Это не стоп-слово!');
});
