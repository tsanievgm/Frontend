// theme for
    //пример с числами Фибоначчи

let fibo = [1, 1]; // первые два числа Фибоначчи

for (let i = 1; i < 10; ++i) {
    fibo.push(fibo[i] + fibo[i - 1]);
}

let i = 10;
for (; i > 0;) {
    console.log('i = ' + i--)
}