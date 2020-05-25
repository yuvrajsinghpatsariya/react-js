import React ,{Component}from 'react';
import ReactDOM from 'react-dom';


/*******JSX Creat object */

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
      
  
componentWillMount(){
  
    console.log("component will mounted");
  }
componentDidMount(){
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
    console.log("compnent did mounted");
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
//   }
// componentWillReceiveProps(nextProps){
//   console.log("will prop",nextProps)
// }
// shouldComponentUpdate(nextProps,nextState){
//   console.log("should update",nextProps,nextState)
// }
// componentWillUpdate(nextProps,nextState){
//   console.log("component Will update",nextProps,nextState)
// }

// componentDidUpdate(preProps,preState){
//   console.log("component Did update",preProps,preState)
// }
componentWillUnmount(){
  clearInterval(this.timerID);
  console.log("componentWillUnmount")
}

changeSate(){
  this.state({
    home:!this.state.home
  })
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
       <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      /* <button onClick={() => this.changeState.bind(this)}>(Un) Mounted Home Comment</button>
      <button onClick={() => this.changeMessage()}>change message</button> */
    // </div>
  );
  }
}



ReactDOM.render(
  <Comment
  />,
  document.getElementById('root')
);

