import React from 'react';
import HogData from '../porkers_data.js';
import HogTile from './HogTile.js'

export default class HogList extends React.Component {
  state = {}

  getHogImg(hogName) {
    return hogName.toLowerCase().replace(/ /g,"_");
  }

  mapHogs() {
    return HogData.map(hog => <HogTile key={hog.name} hog={hog} getHogImg={this.getHogImg}/>)
  }

  render() {
    return (
      <div className="ui grid container">
        {this.mapHogs()}
      </div>
    )
  }
}
