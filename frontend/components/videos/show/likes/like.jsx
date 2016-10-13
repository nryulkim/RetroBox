import React from 'react';
import { withRouter } from 'react-router';

class LikeBar extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      currentUserLike: 0,
      initialStatus: 0,
      likes: 0,
      dislikes: 0,
      idx: -1
    };
    this.handleClick = this.handleClick.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.adjustLikeBar = this.adjustLikeBar.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
  }


  adjustLikeBar(props){
    const { likes, dislikes } = this.state;
    const posWidth = 200 * (likes / (likes + dislikes));
    const negWidth = 200 * (dislikes / (likes + dislikes));
    $(".view-counter-like-bar").width(posWidth);
    $(".view-counter-dislike-bar").width(negWidth);
  }

  findLike(props, likeType){
    const { likes, currentUserId } = props;
    if(typeof currentUserId === null) { return -1; }

    let idx = likes.findIndex((like) => {
      if(like.user_id === currentUserId && like.like_type === likeType){
         return true;
       }
      return false;
    });
    return idx;
  }

  setInitialState(props){
    let idx = this.findLike(props, 1);
    let likes = this.getLikes(props, 1);
    let dislikes = this.getLikes(props, -1);
    if(idx !== -1){
      this.setState({
        initialStatus: 1,
        currentUserLike: 1,
        likes: likes,
        dislikes: dislikes,
        idx: idx
      });
    }else {
      idx = this.findLike(props, -1);
      if(idx !== -1){
        this.setState({
          initialStatus: -1,
          currentUserLike: -1,
          likes: likes,
          dislikes: dislikes,
          idx: idx
        });
      }else{
        this.setState({
          initialStatus: 0,
          currentUserLike: 0,
          likes: likes,
          dislikes: dislikes
        });
      }
    }
  }

  componentDidMount(){
    this.setInitialState(this.props);
  }

  componentDidUpdate(){
    const { currentUserLike, initialStatus } = this.state;
    const { likeableId, likeableType } = this.props;
    if(initialStatus !== currentUserLike){
      window.onbeforeunload.likeAJAX[likeableType + likeableId] = this.handleAjax;
    }else{
      delete window.onbeforeunload.likeAJAX[likeableType + likeableId];
    }
  }

  componentWillReceiveProps(nextProps){
    const { currentUserLike, initialStatus } = this.state;
    const { likeableId, likeableType } = this.props;

    if(nextProps.likeableId !== likeableId || nextProps.likeableType !== likeableType){
      this.handleAjax(true);
      this.setInitialState(nextProps);
      delete window.onbeforeunload.likeAJAX[likeableType + likeableId];
    }
  }

  componentWillUnmount(){
    const { likeableId, likeableType } = this.props;
    
    this.handleAjax(true);
    delete window.onbeforeunload.likeAJAX[likeableType + likeableId];
  }

  handleAjax(isAsync){
    const { currentUserLike, initialStatus, idx } = this.state;
    const {
      likeableType,
      likeableId,
      likes,
      currentUserId,
      destroyLike,
      newLike
    } = this.props;
    if(currentUserLike !== initialStatus){
      if(currentUserLike === 0){
        destroyLike(likes[idx].id, isAsync);
      }else{
        newLike({
          like_type: currentUserLike,
          likeable_id: likeableId,
          likeable_type: likeableType,
          user_id: currentUserId,
        }, isAsync);
      }
    }
  }

  handleClick(likeType){
    const { currentUserLike } = this.state;
    const { currentUserId, router } = this.props;
    const likeBar = this;

    if(currentUserId === null){
      return (e) => {
        router.push("/login");
      };
    }

    let inc = 1;
    let otherInc = -1;
    let type = likeType;
    if(currentUserLike === 0){
      otherInc = 0;
    }else if(likeType === currentUserLike){
      inc = -1;
      otherInc = 0;
      type = 0;
    }

    let change = "dislikes";
    let other = "likes";
    if(likeType === 1){
      change = "likes";
      other = "dislikes";
    }


    return (e) => {
      likeBar.setState({
        currentUserLike: type,
        [change]: parseInt(this.state[change]) + inc,
        [other]: parseInt(this.state[other]) + otherInc
      });
    };
  }

  getLikes(props, type){
    const { likes } = props;

    let numLikes = 0;
    for (let i = 0; i < likes.length; i++) {
      if(likes[i].like_type == type){
        numLikes += 1;
      }
    }

    return numLikes;
  }

  render(){
    const { currentUserLike, likes, dislikes } = this.state;

    let upStyle = "fa-thumbs-o-up";
    let downStyle = "fa-thumbs-o-down";
    if(currentUserLike === 1){
      upStyle = "fa-thumbs-up";
    }else if(currentUserLike === -1){
      downStyle = "fa-thumbs-down";
    }


    if(this.props.likeableType === "Video"){
      this.adjustLikeBar();
      return(
        <div className="like-bar group">
          <div className="like group"
            onClick={this.handleClick(1)}>
            <i className={"fa up " + upStyle} aria-hidden="true" />
            <p>{likes.toLocaleString('en-US')}</p>
          </div>
          <div className="dislike group"
            onClick={this.handleClick(-1)}>
            <i className={"fa down " + downStyle} aria-hidden="true"/>
            <p>{dislikes.toLocaleString('en-US')}</p>
          </div>
        </div>
      );
    }else{
      return(
        <div className="like-bar group">
          <p>{(likes - dislikes).toLocaleString('en-US')}</p>
          <div className="like group"
            onClick={this.handleClick(1)}>
            <i className={"fa up " + upStyle} aria-hidden="true" />
          </div>
          <div className="dislike group"
            onClick={this.handleClick(-1)}>
            <i className={"fa down " + downStyle} aria-hidden="true"/>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(LikeBar);
