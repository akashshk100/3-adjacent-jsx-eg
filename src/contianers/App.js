import React, { Fragment } from 'react';
import './App.css';
import ArrayComponent from '../components/ArrayComponent'
import AuxComponent from '../HOC/AuxComponent'
 
function App() {
  return (
    /* <ArrayComponent></ArrayComponent> */   // This uses concept of array considered as single object.
    
    /* 
    <AuxComponent>                            
      <h2>Tag 1</h2>
      <p>Tag 2</p>
      <span>Tag 3</span>
    </AuxComponent>
    */                    // This uses concept of auxiliary component: a component that returns child tags of parent component with props.children

    <Fragment>
      <h2>Tag 1</h2>
      <p>Tag 2</p>
      <span>Tag 3</span>
    </Fragment>

);
}
      
export default App;
