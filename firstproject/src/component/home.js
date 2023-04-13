import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./functionalComponent";
import Formhandling from "./formhandling";

export const Home = () => {
  const info = [
    {
      name: "Raihan",
      id: 4,
      age: 24,
    },
    {
      name: "Hosna",
      id: 5,
      age: 15,
    },
  ];
  return (
    <div>
      {/* sending data for classComponent using props */}
      <ClassComponent
        name="Raihan Hossain"
        number="01863995432"
        person={{
          name: "Rajib Hossain",
          phone: "01566085486",
        }}
      />
      {/* sending data for functionComponent using props */}
      <FunctionalComponent
        number="01863995432"
        person={{
          name: "Rajib Hossain",
          phone: "01566085486",
        }}
      />
      {/* handle a form in reactjs */}
      <Formhandling />
      <div>Array handle</div>
      {
        // works like loop
        info.map((value) => (
          <div key={value.id}>
            My name is: {value.name} My age is: {value.age}
          </div>
        ))
      }
    </div>
  );
};
