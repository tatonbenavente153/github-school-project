function calculateSum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  let sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return sum;
}
