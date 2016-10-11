import React from 'react';
import { withRouter } from 'react-router';

class LikeBar extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      like: "fa-thumbs-o-up",
      dislike: "fa-thumbs-o-down"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.getLikes = this.getLikes.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.handleChanginImage = this.handleChangingImage.bind(this);
  }

  findLike(props, likeType){
    const { likes, currentUserId } = props;
    let idx = likes.findIndex((like) => {
      if(like.user_id === currentUserId && like.like_type === likeType){
         return true;
       }
      return false;
    });
    return idx;
  }

  componentDidMount(){
    this.handleChangingImage(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.handleChangingImage(nextProps);
  }

  handleChangingImage(props){
    let idx = this.findLike(props, 1);
    if(idx !== -1){
      this.state.dislike = "fa-thumbs-o-down";
      this.setState({like: "fa-thumbs-up"});
    }else{
      this.state.like = "fa-thumbs-o-up";
      idx = this.findLike(props, -1);
      if(idx !== -1){
        this.setState({dislike: "fa-thumbs-down"});
      }
    }
  }

  handleClick(likeType, buttonType, className){
    const { likeableType, likeableId, likes, currentUserId, router } = this.props;
    if(currentUserId === null){
      return () => { router.push('/login'); };
    }else{
      let idx = this.findLike(this.props, likeType);

      if(idx !== -1){
        return this.handleDestroy(likes[idx].id, buttonType, className);
      }else{
        return (e) => {
          this.handleLike(likeableType, likeableId, likeType, currentUserId);
        };
      }
    }

  }

  handleDestroy(id, buttonType, className){
    const { destroyLike } = this.props;
    const likes = this;

    return((e)=>{
      e.preventDefault();
      likes.setState({[buttonType]: className});
      destroyLike(id);
    });
  }

  handleLike(likeableType, likeableId, likeType, userId){
    const { newLike } = this.props;
    newLike({
      likeable_type: likeableType,
      likeable_id: likeableId,
      like_type: likeType,
      user_id: userId
    });
  }

  getLikes(type){
    const { likes } = this.props;

    let numLikes = 0;
    for (let i = 0; i < likes.length; i++) {
      if(likes[i].like_type == type){
        numLikes += 1;
      }
    }

    return numLikes.toLocaleString('en-US');
  }

  getTotal(){
    const { likes } = this.props;

    let total = 0;
    for (let i = 0; i < likes.length; i++) {
      total += parseInt(likes[i].like_type);
    }

    return total.toLocaleString('en-US');
  }

  render(){
    const { like, dislike } = this.state;

    if(this.props.likeableType === "Video"){
      return(
        <div className="like-bar group">
          <div className="like group"
            onClick={this.handleClick(1, "like", "fa-thumbs-o-up")}>
            <i className={"fa up " + like} aria-hidden="true" />
            <p>{this.getLikes(1)}</p>
          </div>
          <div className="dislike group"
            onClick={this.handleClick(-1, "dislike", "fa-thumbs-o-down")}>
            <i className={"fa down " + dislike} aria-hidden="true"/>
            <p>{this.getLikes(-1)}</p>
          </div>
        </div>
      );
    }else{
      return(
        <div className="like-bar group">
          <p>{this.getTotal()}</p>
          <div className="like group"
            onClick={this.handleClick(1, "like", "fa-thumbs-o-up")}>
            <i className={"fa up " + like} aria-hidden="true" />
          </div>
          <div className="dislike group"
            onClick={this.handleClick(-1, "dislike", "fa-thumbs-o-down")}>
            <i className={"fa down " + dislike} aria-hidden="true"/>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(LikeBar);
