import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../util/util_functions';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      iconFile: null,
      iconUrl: window.retroBoxAssets.defaultIcon
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.logDemo = this.logDemo.bind(this);
    this.getIcon = this.getIcon.bind(this);
    this.updateIcon = this.updateIcon.bind(this);
  }

  updateIcon(e){
    const file = e.currentTarget.files[0];
    this.getIcon(file);
  }

  getIcon(file){
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ iconFile: file, iconUrl: fileReader.result });
    };

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  componentDidMount(){
    setDragAndDrop("#dropIcon", this.getIcon);
  }

  componentWillReceiveProps(){
    this.setState({
      username: "",
      email: "",
      password: "",
      iconFile: null,
      iconUrl: window.retroBoxAssets.defaultIcon
    });
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    const { formType, process } = this.props;
    const form = this;
    const router = this.props.router;
    $("#submit").prop("disabled",true).toggleClass("disabled");
    const redirect = () => {
      $("#burger-sidebar-container").hide();
      router.push("/");
    };

    let output = this.state;
    if(formType === "Sign Up"){
      const { username, email, password, iconFile } = this.state;
      output = new FormData();
      output.append("user[username]", username);
      output.append("user[email]", email);
      output.append("user[password]", password);
      output.append("user[icon]", iconFile);
    }

    process(output, redirect);
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
      $("#submit").prop("disabled", false).toggleClass("disabled");
    }

    return text;
  }


  logDemo(e){
    e.preventDefault();
    const sess = this;
    const time = 70;
    const info = { "email": "test@test.com", "password": "password" };

    let func = () => { this.handleSubmit(); };

    const types = ["password", "email"];
    for (let i = 0; i < types.length; i++) {
      let inputType = types[i];
      let input = Array.from(info[inputType]);
      let sess2 = sess;

      while(input.length > 0){
        let inputType2 = inputType.slice(0);
        let input2 = input.slice(0);
        let func2 = func;
        let sess3 = sess2;
        func = () => {
          setTimeout(()=>{
            sess3.setState({[inputType2]: input2.join("")});
            func2();
          },time);
        };

        input.pop();
      }
    }

    func();
  }

  render(){
    const { formType } = this.props;
    let usernameInput = null;
    let demoButton = <div>
      <button id="demo" onClick={this.logDemo}>Demo Account</button>
      <div className="separator">or</div>
    </div>;

    let iconInput = null;
    if(formType === "Sign Up"){
      usernameInput = (
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Enter your username"/>
      );

      demoButton = null;

      iconInput = (
        <div className="icon-input-container">
          <div id="dropIcon">
            <input type="file" className="drop_file" id="icon" onChange={this.updateIcon}></input>
            <label htmlFor="icon">
              <img className="icon" src={this.state.iconUrl}/>
              <strong>Choose an icon</strong> or drag it here.
            </label>
          </div>
        </div>
      );
    }


    return(
      <div className="sessionForm group">
        <img src={window.retroBoxAssets.logo}/>
        <h3>Take a trip down memory lane...</h3>
        <ul className= "errors group">
          {this.renderErrors()}
        </ul>
        <div className="session-form">
          {demoButton}
          <form onSubmit={this.handleSubmit}>
            {iconInput}
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

            <button id="#submit" type="submit">{formType}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
