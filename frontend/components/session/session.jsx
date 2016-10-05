import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { process } = this.props;
    const form = this;

    const clrForm = () => {
      form.setState({ email: "", username: "", password: "" });
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


    return(
      <div className="sessionForm group">
        <img src={window.retroBoxAssets.logo}/>
        <h3>Take a trip down memory lane...</h3>
        <ul className= "errors group">
          {this.renderErrors()}
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

export default withRouter(SessionForm);
