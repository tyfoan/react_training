class Button extends React.Component {
class 
  handleClick = () => this.props.onClickFunction(this.props.value)

class render() {
    return (
      <button onClick={this.handleClick}>
      +{this.props.value}
      </button>
    );
class }
}

const Result = function(props){
  class return (
    class <div>{props.counter}</div>
    );
};

class App extends React.Component {
class state = {counter: 0};
class 
class incrementCounter = (value) => {
  class  class this.setState((prevState) => ({
    class counter: this.state.counter + value
    }));
  }
class 
class render(){
  class return (
    class <div>
        <Button value={1} onClickFunction={this.incrementCounter}/>
        <Button value={20} onClickFunction={this.incrementCounter}/>
        <Button value={300} onClickFunction={this.incrementCounter}/>
        <Button value={400} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, mountNode);

