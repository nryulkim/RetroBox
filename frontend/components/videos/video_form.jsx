import React from 'react';
import { Link, withRouter } from 'react-router';

class VideoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      video_url: "",
      description: "",
      user_id: this.props.currentUser.id,
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    document.getElementById("first-button").setAttribute("disabled", true);
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const { process } = this.props;
    const form = this;
    const router = this.props.router;

    const redirect = () => {
      router.push("/");
    };

    process(this.state, redirect);
  }

  changeForm(type){
    let otherType = type === "basicForm" ? "thumbForm" : "basicForm";
    let buttonType = type === "basicForm" ? "Basic Info" : "Thumbnails";
    return (e) => {
      e.preventDefault();
      Array.prototype.forEach.call(e.target.parentElement.children, (child) => {
        if(child.textContent === buttonType){
          child.setAttribute("disabled", true);
        }else{
          child.removeAttribute("disabled");
        }
      });
      document.getElementById(type).style.display = "block";
      document.getElementById(otherType).style.display = "none";
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
    const { formType } = this.props;
    const { form, title, description, video_url } = this.state;
    return(
      <div className="videoFormContainer group">
        <div className="thumbnail-container">
          <h1>ENABLE THUMBNAIL</h1>
          <img className="thumbnail"></img>
        </div>
        <div className="videoForm group">
          <ul className= "errors group">
            {this.renderErrors()}
          </ul>
          <form onSubmit={this.handleSubmit} >
            <div className="group">
              <button type="submit">{formType}</button>
            </div>

            <nav className="formNavBar group">
              <div>
                <button onClick={this.changeForm("basicForm")} id="first-button">Basic Info</button>
                <button onClick={this.changeForm("thumbForm")}>Thumbnails</button>
              </div>
            </nav>
            <div id="basicForm">
              <input type="text"
                value={title}
                onChange={this.update('title')}
                placeholder="Title"/>

              <textarea
                value={description}
                onChange={this.update('description')}
                placeholder="Description"/>

              <input
                type="text"
                value={video_url}
                onChange={this.update('video_url')}
                placeholder="Video URL"/>
            </div>

            <div id="thumbForm">
              <h1>Hello!! I am the thumb form.</h1>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoForm);
