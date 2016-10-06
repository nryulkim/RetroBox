import React from 'react';
import Header from './header/header-container';
import BurgerDrop from './sidebar/burger_dropdown';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showSide: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger(){
    this.setState({showSide: !this.state.showSide});
  }

  render(){
    const { children, location } = this.props;
    const { showSide } = this.state;
    const sidebar = showSide ? <BurgerDrop path={location.pathname}/> : null;

    return(
      <main>
        <header className="header">
          <Header toggleBurger={this.toggleBurger}/>
        </header>
        <div className="content group">
          <sidebar>
            {sidebar}
          </sidebar>
          <div className="main-content">
            {children}
          </div>
        </div>
      </main>
    );
  }
}
