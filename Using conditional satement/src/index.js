import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/***now using date and time*****/

  let curDate = new Date(2020,5, 20, 13, 42 ,20);
  curDate = curDate.getHours();
  let grt = " ";
  if (curDate>=1 && curDate<12){
    grt = "good morning"
  }
  else if(curDate>=12 && curDate<20){
    grt ="good afternoon"
  } 
  else{
    grt ="good night"
  }
ReactDOM.render(
  <>
 <h1 >hello!!{grt}
 </h1>
 
  </>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
