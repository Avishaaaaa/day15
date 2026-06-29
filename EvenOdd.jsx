function EvenOdd() {
  const number = 8;

  return (
    <div>
      <h2>Number: {number}</h2>
      <h1>{number % 2 === 0 ? "Even" : "Odd"}</h1>
    </div>
  );
}

export default EvenOdd;