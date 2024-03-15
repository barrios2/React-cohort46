import { useState } from 'react';
import Count from './Count';
import Button from './Button';

export default function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? 'It is higher than 10!' : 'Keep counting...';

  const handleIncrease = () => setCount(count => count + 1);
  const handleDecrease = () => {
    if (count === 0){
      return;
    }
    setCount(count => count - 1);
  } 

  // const handleClick2 = () => setCount(count => count + 2);
  // const handleDecrease2 = () => {
  //   if (count === 0){
  //     return;
  //   }
  //   setCount(count => count - 2);
  // }

  return (
    <>
      <Count count={count}/>
      <Button handleClick={handleIncrease} text={"+ 1"}/>
      <Button handleClick={handleDecrease} text={"- 1"}/>
      {/* <Button handleClick={handleClick2} text={"+ 2"}/>
      <Button handleClick={handleDecrease2} text={"- 2"}/> */}
      <p>{feedback}</p>
    </>
  )
}
