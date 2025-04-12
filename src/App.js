import React, { Fragment } from "react";

const dummyUsers = [
  { id: 1, name: "Alice", occupation: "Software Engineer", salary: "$80,000", age: 25 },
  { id: 2, name: "Bob", occupation: "Data Analyst", salary: "$70,000", age: 28 },
  { id: 3, name: "Charlie", occupation: "Product Manager", salary: "$90,000", age: 30 },
  { id: 4, name: "David", occupation: "UX Designer", salary: "$75,000", age: 27 },
];

export default function App() {
  return (
    <>
      <h1>React Fragment Behind the Scenes</h1>
      <ul>
        {dummyUsers.map(user => (
          <Fragment key={user.id}>
            <li>
              <h2>{user.name}</h2>
              <p>Occupation: {user.occupation}</p>
              <p>Salary: {user.salary}</p>
              <p>Age: {user.age}</p>
            </li>
          </Fragment>
        ))}
      </ul>
    </>
  );
}