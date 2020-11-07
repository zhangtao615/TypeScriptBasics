function tsDemo(data: { x: number; y: number }) {
  console.log(123);
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsDemo({ x: 3, y: 4 });
