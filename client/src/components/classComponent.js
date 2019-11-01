import React from 'react';
import axios from 'axios';
import CustomForm from './useForm'

class FetchData extends React.Component {
  state = {
    followers: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.followers.length !== this.state.followers.length) {
      console.log(prevState, this.state)
      axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err));
    }

  }

  render() {

    
    return (
      
      <div className="App">

        <div className ="container">
        {this.state.followers.length === 0 && <p>Loading Players...</p>}
        <div className="followers">
          {this.state.followers.map(follower => (
            <div className = "follower">
            <img className = "pic" width="200" src={follower.avatar_url}/>
            <h3>{follower.name}</h3>
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