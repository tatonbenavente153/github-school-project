function getRandomJsCode() {
    const codes = ["const greeting = 'Hello';", "let i = 0; while (i < 10) { console.log(i); i++; }", "function add(x, y) { return x + y; }"];
    return codes[Math.floor(Math.random() * codes.length)];
}