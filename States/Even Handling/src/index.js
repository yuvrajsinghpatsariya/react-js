import React ,{Component}from 'react';
import ReactDOM from 'react-dom';


/*******JSX Creat object */

class Comment extends Component {
  constructor(){
    super();
      this.state={
      message:"Welcome"};
      
  }
  changeMessage(){
    this.setState({
      message:"byebye"
    })
  }
  render(){
    console.log("this",this)
  return (
    <div className="Comment">
      <h2>hiii{this.state.message}</h2>
      
      <button onClick={() => this.changeMessage()}>change message</button>
    </div>
  );
  }
}


ReactDOM.render(
  <Comment
  />,
  document.getElementById('root')
);

