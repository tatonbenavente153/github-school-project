const names = ["Alice", "Bob", "Charlie"];
const numbers = [123456789, 987654321, 5551212];
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}
function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
