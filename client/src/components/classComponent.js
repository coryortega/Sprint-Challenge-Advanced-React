import React from 'react';
import axios from 'axios';
import CustomForm from './useForm'

class FetchData extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log(res)
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.players.length !== this.state.players.length) {
    //   console.log(prevState, this.state)
      axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log(err));
    }

  }

  render() {

    
    return (
      
      <div className="App">

        <div className ="container">
        {this.state.players.length === 0 && <p>Loading Players...</p>}
        <div className="players">
          {this.state.players.map(player => (
            <div className = "player">
            <h3>{player.name}</h3>
            <CustomForm />
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }

}



export default FetchData;