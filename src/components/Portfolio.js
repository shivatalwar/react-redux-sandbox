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
  }
}


export class Portfolio extends React.Component {
  render() {
    return (
        <div className='container'>
          <Card zDepth={0} className='card-app'>
              <CardText style={{textAlign: 'center'}}>
                Portfolio
              </CardText>
            </Card>
        </div>
    );
  }
}

export default connect()(Portfolio);
