import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeperator} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';

const styles = {
  title: {
    paddingLeft:16,
    color: 'black'
  },
  headline: {
    fontSize: 24
  },
  toolbar: {
    backgroundColor: 'white'
  },
  tabs: {
    margin: 0
  },
  icon: {
    marginRight: 24
  }
}


export class Discover extends React.Component {
  render() {
    return (
        <div className='container'>
          <Card zDepth={0} className='card-app'>
              <CardText style={{textAlign: 'center'}}>
                Hey, I&#39;m Shiva Talwar and I am currently a Software Development
                Engineer at IMDb in Seattle, Washington. I graduated from
                Honours Electrical & Computer Engineering at the University of
                Waterloo in 2016. I have done numerous internships at companies
                like Amazon Web Services, SMART Technologies, and Blackberry.
                This is my react-redux sandbox.
              </CardText>
              <div style={{textAlign: 'center'}}>
                <a href='http://github.com/shivatalwar' target='_blank' ><FontIcon color='lightgrey' hoverColor='black' className='fa fa-github-square fa-2x social' /></a>
                <a href='http://linkedin.com/in/shiva-talwar-a07ba889' target='_blank' ><FontIcon color='lightgrey' hoverColor='black' className='fa fa-linkedin-square fa-2x social' /></a>
                <a href='mailto:shiva5talwar@gmail.com' target='_blank' ><FontIcon color='lightgrey' hoverColor='black' className='fa fa-envelope-square fa-2x social' /></a>
              </div>
            </Card>
        </div>
    );
  }
}

export default connect()(Discover);
