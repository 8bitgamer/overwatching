import React, { Component } from 'react';
import './GeneralData.scss';


class GeneralData extends Component {
  state = {
    bestHeroCls: {
      image: '',
      details: 'closed',
    },
    bestMapCls: {
      image: '',
      details: 'closed',
    },
    generalStatsCls: {
      image: '',
      details: 'closed',
    },
  };
  tileClick(elem) {
    if (this.state[elem].image !== 'open') {
      const state = this.state;
      for (const key1 in state) {
        if (state.hasOwnProperty(key1)) {
          for (const key2 in state[key1]) {
            if (state[key1].hasOwnProperty(key2) && key1 !== elem) {
              state[key1][key2] = 'closed';
            } else {
              state[key1][key2] = 'open';
            }
          }
        }
      }
      this.setState(state);
    } else {
      this.setState({
        bestHeroCls: {
          image: '',
          details: 'closed',
        },
        bestMapCls: {
          image: '',
          details: 'closed',
        },
        generalStatsCls: {
          image: '',
          details: 'closed',
        },
      });
    }
  }
  render() {
    return (
      <div id="General-data">
      <div className={'best-hero-image image-card tile ' + this.state.bestHeroCls.image} onClick={this.tileClick.bind(this, 'bestHeroCls')} >
        <div className="title">Best Hero</div>
      </div>
      <div className={'best-hero-details stat-card tile ' + this.state.bestHeroCls.details}></div>
      <div className={'best-map-image image-card tile ' + this.state.bestMapCls.image} onClick={this.tileClick.bind(this, 'bestMapCls')} >
        <div className="title">Best Map</div>
      </div>
      <div className={'best-map-details stat-card tile ' + this.state.bestMapCls.details}></div>
      <div className={'general-stats-image image-card tile ' + this.state.generalStatsCls.image} onClick={this.tileClick.bind(this, 'generalStatsCls')}>
        <div className="title">General Stats</div>
      </div>
      <div className={'general-stats-details stat-card tile ' + this.state.generalStatsCls.details}></div>
    </div>
    );
  }
}

export default GeneralData;
