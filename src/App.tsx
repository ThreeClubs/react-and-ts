import React from 'react';
import './App.css';

let name: string;
name = "Andrew"

let age: number;
age = 37

let isStudent: boolean;
isStudent = true;

if (!isStudent) {
  console.log("not a student")
  }
else console.log("is a student")

let hobbies: string[];
hobbies = ["reading", "cooking"]

let numbers: number[];
numbers = [1,2,3]

let role:[number, string];
role = [37, "string"]

// type Person= {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Andrew",
//   age: 37
// }

// let lotsOfPeople: Person[];

// let stringNumberUnion: number | string;

// stringNumberUnion = 5;
// stringNumberUnion = "Andrew"

// function printName(name: string) {
//   console.log(name)
// }

// printName(name)

let printName: (name:string) => void;

let personName: unknown;  // instead of any type




function App() {
  return (
    <div className="App">
      Welcome to the world of Typescript and React with {name}, {age}
    </div>
  );
}

export default App;
