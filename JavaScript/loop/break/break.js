// колода
let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама']

console.log('Ищем даму в колоде...')

let found = false;

for (let card of cards) {
    console.log(`Из колоды вытянута ${card}`);
    if (card === 'Дама') {
        found = true;
        break;
    }
}

console.log(found ? 'Мы нашли Даму!' : 'В колоде нет Дам.');