const Card = (props) => {
return (
  <div>
      <img src={props.avatar} width='75'/>
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.35em'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

const CardsList = (props) => {
return (
  <div>
      {props.cards.map(card => <Card {...card}/>)}
    </div>
  )
}

class Form extends React.Component {

  state = { userName: '' };
  
  handleSubmit = (event) => {
  event.preventDefault();
    console.log(this.state.userName)
    axios.get()
    .then(resp => {
    this.props.onSubmit(resp.data)
    });
  };

render(){
  return (
    <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.userName} onChange={(event) => this.setState({ userName: event.target.value })} placeholder='Github username'  required/>
          
        <button type='submit'>Add card</button>
      </form>
    )
  }
}

class App extends React.Component {

  state = {
  cards: [
    {
        name: 'Paul O’Shannessy',
        avatar: 'https://avatars2.githubusercontent.com/u/8445?v=3',
        company: 'Facebook'
      },
      {
        name: 'Alexander',
        avatar: 'https://avatars1.githubusercontent.com/u/6820?v=3',
        company: 'Google'
      }
      ]
  }
  
  addNewCard = (cardInfo) => {
  this.setState(prevState => ({
  cards: prevState.cards.contact(cardInfo)
  }));
  }

render(){
  return (
    <div>
        <Form onSubmit={ this.addNewCard} />
        <CardsList cards={ this.state.cards } />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
