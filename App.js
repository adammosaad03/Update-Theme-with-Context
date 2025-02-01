import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContactsSection } from "./ContactsSection";
import { ThemeArea } from "./ThemeContext";

const family = [
  {
    name: "Finn the Human"
  },
  {
    name: "Jake the Dog"
  }
];

const friends = [
  {
    name: "Marceline"
  },
  {
    name: "Princess Bubblegum"
  }
];

function App() {
  return (
    <div>
      <h1>Contacts</h1>
      <ThemeArea initialTheme="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>
      <ThemeArea initialTheme="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );
}

export default App
