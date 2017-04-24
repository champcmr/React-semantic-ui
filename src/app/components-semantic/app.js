import React, { Component } from 'react';
import {Link} from 'react-router';
// import {push} from 'react-router-redux';

import { Menu } from 'semantic-ui-react'

export default class App extends Component {

  constructor(props){
      super(props);
      console.log('Props',this.props);
      console.log('State',this.state);
  }  

  handleItemClick = (e, { name }) => {
      console.log('In param',name);
      
      // if(name==='members'){
      //   this.props.dispatch(push('/'));
      // }else if(name==='new-member'){
      //   this.props.dispatch(push('/new-member'));
      // }  

      this.props.setActiveMenu(name);
  }

  render() {
    return (
      <div>
      <Menu>
        <Link to="/">
        <Menu.Item
          name='members'
          active={this.props.app.activeItem === 'members'}
          onClick={this.handleItemClick}
        >
          Members
        </Menu.Item>
        </Link>
        <Link to="/new-member">
        <Menu.Item
          name='newMember'
          active={this.props.app.activeItem === 'newMember'}
          onClick={this.handleItemClick}
        >
          Add New Member
        </Menu.Item>
        </Link>
      </Menu>
      <div>
      {/* Each smaller components */}
        {this.props.children}
      </div>
      </div>
    )
  }
}
