import { useState } from "react";

function Counter() {
  // console.log('render Counter')
  const [number, setNumber] = useState(0);
  function handleClick(e) {
    e.stopPropagation();
    // number++; state ko directly change nhi karte hain.
    // setTimeout(()=>{
    //     setNumber(number =>number+1);

    // },2000)
    // setNumber(number+1);
    // setNumber(number+1);
    // setNumber(number+3);

    setNumber((number) => number + 1); //updater function style.
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);

    console.log(number);
  }
  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default Counter;
