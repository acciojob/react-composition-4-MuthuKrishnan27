
import React from "react";
import Form from './Form'
import './../styles/App.css';

const App = () => {
  function onHandleForm(formvalues){
    console.log(formvalues);
  }

  const fieldsData = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' }
    // Add more fields as needed
  ];

  return (
    <div>
        <Form onSubmit={onHandleForm} fields={fieldsData}/>
    </div>
  )
}

export default App
