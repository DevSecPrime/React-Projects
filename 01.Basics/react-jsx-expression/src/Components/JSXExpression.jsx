const JSXExpression = () => {
  const multiply = (a, b) => a * b;
  const className = "jsx-expression";
  const name = "Mr. Prime";

  return (
    <>
      <p>2 + 2 = {2 + 2}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={className}>This is Special class</p>
      <p>Hello!, {name}</p>
    </>
  );
};

export default JSXExpression;
