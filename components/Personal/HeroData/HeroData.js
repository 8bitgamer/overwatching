import React, {Component} from 'react';
import './HeroData.scss';

function mapHeroData(heroes) {
  return heroes.map(function map(elem) {
    return (
      <li key={elem.name} className="Hero-tile tile">
        <div className="portrait-wrapper">
          <img xmlns="http://www.w3.org/1999/xhtml"
               className="portrait"
               src={elem.image} />
        </div>
        <ul className="stat-section hero-data">
          <li className="stat total-games">940</li>
          <li className="stat wins">940</li>
          <li className="stat losses">940</li>
        </ul>
        <ul className="stat-section">
          <li className="stat win-rate">56.6%</li>
          <li className="stat best-map">Hollywood</li>
          <li className="stat class-rank">2</li>
          <li className="stat win-rate">4</li>
        </ul>
      </li>
    );
  });
}


const classes = mapHeroData([{
  name: 'D.Va',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/dva-concept.1cf9X.jpg',
}, {
  name: 'Mei',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/mei-concept.1fdRi.jpg',
}, {
  name: 'Genji',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/genji-concept.1vnPO.jpg',
}, {
  name: 'Roadhog',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/roadhog-concept.2F67s.jpg',
}, {
  name: 'Junkrat',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/junkrat-concept.1jNbs.jpg',
}, {
  name: 'Lúcio',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/lucio-concept.3J1Ou.jpg',
}, {
  name: 'Soldier: 76',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/soldier-76-concept.2Fk8m.jpg',
}, {
  name: 'Zarya',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/zarya-concept.0Mntk.jpg',
}, {
  name: 'McCree',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/mccree-concept.0kow2.jpg',
}, {
  name: 'Reaper',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/reaper-concept.0tqr6.jpg',
}, {
  name: 'Tracer',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/tracer-concept.2dpWp.jpg',
}, {
  name: 'Pharah',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/pharah-concept.1cBY2.jpg',
}, {
  name: 'Widowmaker',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/widowmaker-concept.4WuQB.jpg',
}, {
  name: 'Winston',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/winston-concept.3B0Hw.jpg',
}, {
  name: 'Mercy',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/mercy-concept.3WGvI.jpg',
}, {
  name: 'Torbjörn',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/torbjorn-concept.19FeQ.jpg',
}, {
  name: 'Bastion',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/bastion-concept.26xnt.jpg',
}, {
  name: 'Reinhardt',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/reinhardt-concept.1LGeF.jpg',
}, {
  name: 'Symmetra',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/symmetra-concept.2rctK.jpg',
}, {
  name: 'Hanzo',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/hanzo-concept.3UPgE.jpg',
}, {
  name: 'Zenyetta',
  image: '//bnetus-a.akamaihd.net/overwatch/static/media/thumbnail/zenyatta-concept.4QNRU.jpg',
}]);

class HeroData extends Component {
  render() {
    return (
      <div id="HeroData">
        <ul className="Heroes">
          {classes}
        </ul>
      </div>
    );
  }
}

export default HeroData;
