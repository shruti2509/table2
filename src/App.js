

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Content from './components/Content';

function App() {


  // pop function
  
   
  return (
    <>
    <Navbar/>
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>User Id</th>
        <th>Phone Number</th>
        <th>Status</th>
        <th></th>
      </tr>

      </thead>
      <tbody>
       <Content/>
      </tbody>
      </table>
     
      </>
  );
}

export default App;
