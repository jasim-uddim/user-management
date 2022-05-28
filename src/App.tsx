import React from "react";

import "./App.css";
import Counter from "./Components/Counter";
import Users from "./Components/Users";

let studente: string = "jolly";
let age: number = 55;
let address: string = "dawgon";
const students: string[] = ["john", "jasim", "nazmul"];
const fees: number[] = [45, 54, 65, 52, 43];
const person: { name: string; age: number; address: string } = {
  name: "jasim",
  age: 55,
  address: "muktagasha",
};
interface Student {
  name: string;
  age?: number;
  employed?: string | boolean;
  address: string;
}

const handleAddUser = (
  firstName: string,
  age: number,
  address: string
): number | string => {
  const total: number = 55;
  console.log(firstName, address, age);
  return address;
};
const student: Student = {
  name: "jasim uddin",
  age: 26,
  address: "dawgon",
};
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
