import React from 'react';
import ReactDOM from 'react-dom';


/*******JSX Creat object */
function tic(){
class Comment extends React.Component {
  constructor(props){
    super(props);
      this.state={Date:new Date()};
  }
  render(){
    console.log("this",this)
  return (
    <div className="Comment">
      <h2>hiii</h2>
      <h2>date{this.state.Date.toLocaleTimeString()}</h2>
    </div>
  );
  }
}


ReactDOM.render(
  <Comment
  />,
  document.getElementById('root')
);
}
setInterval(tic,1000)

