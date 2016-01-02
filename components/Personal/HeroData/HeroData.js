import React, {Component, PropTypes} from 'react';
import './HeroData.scss';
import heroes from '../../Utils/heroes.js';

class HeroData extends Component {
  static propTypes = {
    data: PropTypes.array,
    filter: PropTypes.object,
  }
  mapHeroData(data) {
    function getBestMap(hero) {
      if (hero.hasOwnProperty('byMap')) {
        let bestMap = null;
        for (const map in hero.byMap) {
          if (hero.byMap.hasOwnProperty(map)) {
            const tempMap = hero.byMap[map];
            if (bestMap === null) {
              bestMap = map;
            } else if (hero.byMap[bestMap].win / hero.byMap[bestMap].losses < tempMap.win / tempMap.losses) {
              bestMap = map;
            }
          }
        }
        return bestMap;
      }
      return 'n/a';
    }
    return data.map(function map(hero, index) {
      const totalGames = hero.wins + hero.losses;
      return (
        <li key={hero.name} className="Hero-tile tile">
          <div className="portrait-wrapper">
            <img xmlns="http://www.w3.org/1999/xhtml"
                 className="portrait"
                 src={heroes[hero.name].images.thumbnail} />
          </div>
          <ul className="stat-section hero-data">
            <li className="stat total-games">{totalGames}</li>
            <li className="stat wins">{hero.wins}</li>
            <li className="stat losses">{hero.losses}</li>
            <li className="stat win-rate">{(100 * hero.wins / totalGames).toString().substring(0, 5) + '%'}</li>
          </ul>
          <ul className="stat-section">
            <li className="stat class-rank">{index + 1}</li>
            <li className="stat empty"></li>
            <li className="stat best-map">{getBestMap(hero)}</li>
            <li className="stat win-rate">4</li>
          </ul>
        </li>
      );
    });
  }
  render() {
    return (
      <div id="HeroData">
        <ul className="Heroes">
          {this.mapHeroData(this.props.data)}
        </ul>
      </div>
    );
  }
}

export default HeroData;
