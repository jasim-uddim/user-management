import React, { FormEvent, useState } from "react";
interface User {
  name: string;
  job: string;
}

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const handleIncrease = (): void => {
    setCount(count + 1);
  };

  const handledecrease = (): void => {
    setCount(count - 1);
  };

  const handleUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name: "jasim",
      job: "jobless",
    };
    setUser(userData);
  };
  return (
    <div>
      <h1>This is Counter</h1>
      <h2>{count}</h2>
      <button className="m-2" onClick={handleIncrease}>
        increase
      </button>
      <button onClick={handledecrease}>decrease</button>
    </div>
  );
};

export default Counter;
