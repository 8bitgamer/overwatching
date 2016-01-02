import React, { Component, PropTypes } from 'react';
import './GeneralData.scss';
import heroes from '../../Utils/heroes.js';
import maps from '../../Utils/maps.js';

class GeneralData extends Component {
  static propTypes = {
    data: PropTypes.array,
    filter: PropTypes.object,
  }
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
  /**
   * gets the best map based on win rate from the defualt hero data pased in
   * @param  {object} data
   * @return {String}
   */
  static getBestMap(data) {
    function createMapObj(heroData) {
      const mapObj = {};
      heroData.forEach(function addToMap(hero) {
        if (hero.hasOwnProperty('byMap')) {
          for (const map in hero.byMap) {
            if (hero.byMap.hasOwnProperty(map)) {
              if (mapObj.hasOwnProperty(map)) {
                mapObj[map].wins += hero.byMap[map].wins;
                mapObj[map].losses += hero.byMap[map].losses;
              } else {
                mapObj[map] = {
                  losses: hero.byMap[map].losses,
                  wins: hero.byMap[map].wins,
                };
              }
            }
          }
        }
      });
      return mapObj;
    }

    const mapData = createMapObj(data);
    let bestMap = null;
    for (const map in mapData) {
      if (mapData.hasOwnProperty(map)) {
        if (bestMap === null || mapData[bestMap].wins / mapData[bestMap].losses < mapData[map].wins / mapData[map].losses) {
          bestMap = map;
        }
      }
    }
    return bestMap;
  }

  static getMostPlayed(data) {
    let maxIndex = 0;
    for (let index = 0; index < data.length; index++) {
      if (data[maxIndex].wins + data[maxIndex].losses < data[index].wins + data[index].losses) {
        maxIndex = index;
      }
    }
    return data[maxIndex];
  }
  /**
   * handler for when a tile is clicked, either resets to default state or goes the open state
   * @param  {String} elem [Name of the elem clicked]
   */
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
    const data = this.props.data;
    if (data.length >= 1) {
      return (
        <div id="General-data">
        {data.length > 1 ? (
          <div className={'best-hero-image image-card tile ' + this.state.bestHeroCls.image}
               onClick={this.tileClick.bind(this, 'bestHeroCls')}
               style={{backgroundImage: 'url(' + heroes[data[0].name].images.full + ')'}}>
            <div className="title">Best Hero</div>
          </div>) : ''}
          <div className={'best-hero-details stat-card tile ' + this.state.bestHeroCls.details}></div>
        {this.props.filter.map === 'all' ? (
          <div className={'best-map-image image-card tile ' + this.state.bestMapCls.image}
               onClick={this.tileClick.bind(this, 'bestMapCls')}
               style={{backgroundImage: 'url(' + maps[GeneralData.getBestMap(data)].images.full + ')'}}>
            <div className="title">Best Map</div>
          </div>) : '' }
        <div className={'best-map-details stat-card tile ' + this.state.bestMapCls.details}></div>
        <div className={'general-stats-image image-card tile ' + this.state.generalStatsCls.image}
             onClick={this.tileClick.bind(this, 'generalStatsCls')}
             style={{backgroundImage: 'url(' + heroes[GeneralData.getMostPlayed(data).name].images.full + ')'}}>
          <div className="title">General Stats</div>
        </div>
        <div className={'general-stats-details stat-card tile ' + this.state.generalStatsCls.details}></div>
      </div>
      );
    }
    return (
      <div>empty</div>
    );
  }
}

export default GeneralData;
