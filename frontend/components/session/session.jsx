import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(){
    if(this.props.loggedIn){
      // hashHistory.push("/");
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const { process } = this.props;
    const form = this;

    const clrForm = () => {
      form.setState({ username: "", password: "" });
    };

    process(this.state, clrForm);
  }


  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  renderErrors(){
    const { errors } = this.props;

    let text = "";
    if(errors.length > 0){
      text = errors.map((error, idx) => (<li key={idx}>{error}</li>));
    }

    return text;
  }

  render(){
    const { errors, formType } = this.props;
    let usernameInput = "";
    if(formType === "Sign Up"){
      usernameInput = (
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Enter your username"/>
      );
    }

    let errorText = "";
    if(errors.length > 0){
      errorText = errors.map((error, idx) => (<li key={idx}>{error}</li>));
    }

    return(
      <div className="sessionForm group">
        <img src={window.retroBoxAssets.logo}/>
        <h3>Take a trip down memory lane...</h3>
        <ul className= "group">
          {errorText}
        </ul>
        <form onSubmit={this.handleSubmit} >
          {usernameInput}
          <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Enter your email"/>

          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"/>

          <button type="submit">{formType}</button>
        </form>
      </div>
    );
  }
}
