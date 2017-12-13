import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeperator} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    gridList: {
    height: 700,
    overflowY: 'auto',
  }
}

const tilesData = [
  {
    img: 'images/logo.png',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


export class Explore extends React.Component {
  render() {
    return (
        <div className='container'>
          <Card zDepth={0} className='card-app'>
              <CardText style={{textAlign: 'center'}}>
                  <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                    className='grid-list'
                  >
                    {tilesData.map((tile) => (
                      <GridTile
                        key={tile.img}
                        title={tile.title}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        cols={tile.featured ? 2 : 1}
                        rows={tile.featured ? 2 : 1}
                      >
                        <img src={tile.img} />
                      </GridTile>
                    ))}
                  </GridList>
              </CardText>
            </Card>
        </div>
    );
  }
}

export default connect()(Explore);
