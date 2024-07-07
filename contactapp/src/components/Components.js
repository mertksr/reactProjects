import React, { useState, useEffect } from "react";
import List from "./Contact/List";
import Form from "./Contact/Form";

import "./style.css";

function Components() {
  const [contact, setContact] = useState([
    {
      name: "Ali",
      phonenumber: "123123",
    },
    {
      name: "Ayşe",
      phonenumber: "456456",
    }
  ]);
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  return (
    <div id="container">
      <List contacts={contact} />
      <Form addContact={setContact} contacts={contact} />
    </div>
  );
}

export default Components;
