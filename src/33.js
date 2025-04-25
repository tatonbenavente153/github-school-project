function fibonacci(n) {
    if (n <= 1) return n;
    let previous = 0;
    let current = 1;
    let nextTerm;

    for (let i = 2; i <= n; i++) {
        nextTerm = current + previous;
        previous = current;
        current = nextTerm;
    }
    return nextTerm;
}

console.log(fibonacci(10));
