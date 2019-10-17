import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import Form from "./Form";
import Forms from "./Forms";

function App() {

  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Forms membersList={members}/>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
