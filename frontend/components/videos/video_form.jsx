import React from 'react';
import { Link, withRouter } from 'react-router';

class VideoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      video_url: "",
      description: "",
      user_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
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
    const { formType } = this.props;

    return(
      <div className="videoForm group">
        <ul className= "errors group">
          {this.renderErrors()}
        </ul>
        <form onSubmit={this.handleSubmit} >
          <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Title"/>

          <input
            type="textbox"
            value={this.state.password}
            onChange={this.update('description')}
            placeholder="Description"/>

          <input
            type="text"
            value={this.state.password}
            onChange={this.update('video_url')}
            placeholder="Video URL"/>

          <button type="submit">{formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(VideoForm);
