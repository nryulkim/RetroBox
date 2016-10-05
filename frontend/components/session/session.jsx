import React from 'react';
import { Link, withRouter } from 'react-router';

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
    this.logDemo = this.logDemo.bind(this);
  }

  handleSubmit(e){
    if(e){e.preventDefault();}
    const { process } = this.props;
    const form = this;
    const router = this.props.router;

    const redirect = () => {
      router.push("/");
    };

    process(this.state, redirect);
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

  logDemo(e){
    e.preventDefault();
    const sess = this;
    const time = 100;
    setTimeout(()=>{
      sess.setState({email: "t"});
      setTimeout(()=>{
        sess.setState({email: "te"});
        setTimeout(()=>{
          sess.setState({email: "tes"});
          setTimeout(()=>{
            sess.setState({email: "test"});
            setTimeout(()=>{
              sess.setState({email: "test@"});
              setTimeout(()=>{
                sess.setState({email: "test@t"});
                setTimeout(()=>{
                  sess.setState({email: "test@te"});
                  setTimeout(()=>{
                    sess.setState({email: "test@tes"});
                    setTimeout(()=>{
                      sess.setState({email: "test@test"});
                      setTimeout(()=>{
                        sess.setState({email: "test@test."});
                        setTimeout(()=>{
                          sess.setState({email: "test@test.c"});
                          setTimeout(()=>{
                            sess.setState({email: "test@test.co"});
                            setTimeout(()=>{
                              sess.setState({email: "test@test.com"});
                              setTimeout(()=>{
                                sess.setState({password: "p"});
                                setTimeout(()=>{
                                  sess.setState({password: "pa"});
                                  setTimeout(()=>{
                                    sess.setState({password: "pas"});
                                    setTimeout(()=>{
                                      sess.setState({password: "pass"});
                                      setTimeout(()=>{
                                        sess.setState({password: "passw"});
                                        setTimeout(()=>{
                                          sess.setState({password: "passwo"});
                                          setTimeout(()=>{
                                            sess.setState({password: "passwor"});
                                            setTimeout(()=>{
                                              sess.setState({password: "password"});
                                              setTimeout(()=>{
                                                sess.handleSubmit();
                                              },time);
                                            },time);
                                          },time);
                                        },time);
                                      },time);
                                    },time);
                                  },time);
                                },time);
                              },time);
                            },time);
                          },time);
                        },time);
                      },time);
                    },time);
                  },time);
                },time);
              },time);
            },time);
          },time);
        },time);
      },time);
    },time);
  }

  render(){
    const { formType } = this.props;
    let usernameInput = <div>
      <button id="demo" onClick={this.logDemo}>Demo Account</button>
      <div className="separator">or</div>
    </div>;
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