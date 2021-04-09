import React, { Component } from "react";
import AddForm from "./addForm";

// https://dmitripavlutin.com/react-forms-tutorial/

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};
const UseRcc = () => {
  return (
    <>
      <h1>{initialState.users.filter((user) => user.active).length}</h1>
      <AddForm />
    </>
  );
};

export default UseRcc;
