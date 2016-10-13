import React from 'react';

class SubButton extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      initialStatus: "subscribe",
      currentStatus: "subscribe",
      sub: null
    };
    this.handleSub = this.handleSub.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
  }

  setInitialState(props){
    let sub = props.currentUser.subscriptions.find((sub) => {
      return sub.channel_id === props.channel.id;
    });

    if(sub){
      this.setState({
        initialStatus: "unsubscribe",
        currentStatus: "unsubscribe",
        sub
      });
    }else{
      this.setState({
        initialStatus: "subscribe",
        currentStatus: "subscribe",
        sub: null
      });
    }
  }


  componentDidMount(){
    const { currentUser, getSubscriptions } = this.props;
    if(!currentUser.subscriptions){
      getSubscriptions(currentUser.id);
    }else{
      this.setInitialState(this.props);
    }
  }

  componentWillReceiveProps(nextProps){
    this.handleAjax();
    this.setInitialState(nextProps);
  }

  componentWillUnmount(){
    this.handleAjax();
  }

  handleAjax(){
    const { currentStatus, initialStatus, subId } = this.state;
    const {
      channel,
      currentUser,
      deleteSubscription,
      newSubscription
    } = this.props;
    if( currentStatus !== initialStatus ){
      if(initialStatus === "unsubscribe"){
        deleteSubscription(sub.id);
      }else{
        newSubscription({
          subscribee_id: channel.id,
          subscriber_id: currentUser.id
        });
      }
    }
  }


  handleSub(e){
    e.preventDefault();
    const { currentStatus, sub } = this.state;
    const { channel, removeSubscription, receiveSubscription } = this.props;
    if(currentStatus === "subscribe"){
      this.setState({ currentStatus: "unsubscribe" });
      if(sub){
        receiveSubscription(sub);
      }else{
        receiveSubscription({
          id: -1,
          channel_id: channel.id,
          username: channel.username,
          icon_url: channel.icon_url
        });
      }
    }else{
      this.setState({ currentStatus: "subscribe" });
      if(sub){
        removeSubscription(sub.id);
      }else{
        removeSubscription(-1);
      }
    }
  }

  render(){
    const { currentStatus } = this.state;
    return(
      <button className={ currentStatus } onClick={ this.handleSub }>
        {currentStatus}
      </button>
    );
  }
}

export default SubButton;
