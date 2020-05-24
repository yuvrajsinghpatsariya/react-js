import React from 'react';
import './index.css';
import Heading from './Heading';
import List from "./List";
import {sum, sub, mult, div, mod} from "./Cal";
/***now using date and time*****/

 
function App(){
    return(
  <>
  
 <Heading />
 <List />
 <h1 >hello!!
 <ol>
 <li>sum is{sum(25,25)}</li>
 <li>Sub is {sub(25,25)}</li>
 <li>Mult is {mult(25,25)}</li>
 <li>Division is {div(25,25)}</li>
 <li>Mod is {mod(25,25)}</li>
 </ol>

 
 </h1>
 </>
);
}
export default App;