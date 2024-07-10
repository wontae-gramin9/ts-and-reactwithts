function minus(num1: number, num2: number): void {
  console.log(num1 - num2);
}

// OPTIONAL
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

// ARRAY DESTRUCTURING
function add3(...nums: number[]) {
  return nums.reduce((acc, val) => acc + val, 0);
}
