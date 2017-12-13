import React from 'react'
import {connect} from 'react-redux'
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeperator} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <div>
          <Drawer
            docked={false}
            width={256}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/" />}>Discover</MenuItem>
            <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/explore" />}>Explore</MenuItem>
            <MenuItem onTouchTap={this.handleClose} href='./resume.pdf' target='_blank'>Resume</MenuItem>
            <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/portfolio" />}>Portfolio</MenuItem>
          </Drawer>
        </div>
        <Toolbar style={{backgroundColor:'white', padding:0}}>
          <div className='headerContainer'>
            <div className='sidebarButton'>
              <FontIcon className="material-icons" onTouchTap={this.handleToggle}>dehaze</FontIcon>
            </div>
            <div className='nameIconContainer'>
              <Link to='/'>
              <img src='logo.png' className='nameIcon' />
              </Link>
            </div>
            <div className='links'>
              <FlatButton labelStyle={{textTransform: "none"}} label='Discover' containerElement={<Link to='/' />}/>
              <FlatButton labelStyle={{textTransform: "none"}} label='Explore' containerElement={<Link to='/explore' />}/>
              <FlatButton style={{verticalAlign: "inherit"}}labelStyle={{textTransform: "none"}} label='Resume' href='./resume.pdf' target='_blank'/>
              <FlatButton labelStyle={{textTransform: "none"}} label='Portfolio' containerElement={<Link to='/portfolio' />}/>
            </div>
          </div>
        </Toolbar>
        <Divider />
      </div>
    );
  }
}

export default connect()(Header);
