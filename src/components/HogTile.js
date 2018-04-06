import React from 'react';
import HogDetails from './HogDetails.js'

class HogTile extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const hogWeight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const hogMedal = this.props.hog['highest medal achieved']
    const hogDetail = <HogDetails greased={this.props.hog.greased} specialty={this.props.hog.specialty} weight={hogWeight} medal={hogMedal} />

    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
        <div className= "ui card">
          <img src={require(`../hog-imgs/${this.props.getHogImg(this.props.hog.name)}.jpg`)} />
          <p>{this.props.hog.name}</p>
          {this.state.clicked ? hogDetail : null}
        </div>
      </div>
    )
  }
}

export default HogTile;
