let sum = 0;
for(let i = 1; i <= 10; i++){
    let number = Math.floor(Math.random() * (i - 1 + 1));
    sum += number;
}

console.log(sum);
