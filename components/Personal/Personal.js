import React, {Component} from 'react';
import HeroData from './HeroData';
import GeneralData from './GeneralData';
import Filter from './Filter';

const tempData = [{
  name: 'Soldier: 76',
  wins: 900,
  losses: 420,
  byMap: {
    'Dorado': {
      wins: 500,
      losses: 40,
    },
    'Gibraltar': {
      wins: 400,
      losses: 380,
    },
    'King\'s Row': {
      wins: 300,
      losses: 200,
    },
  },
}, {
  name: 'Mei',
  wins: 69,
  losses: 9001,
  byMap: {
    'Dorado': {
      wins: 34,
      losses: 65,
    },
    'Gibraltar': {
      wins: 10000,
      losses: 12,
    },
  },
}, {
  name: 'Zenyetta',
  wins: 2000,
  losses: 9001,
  byMap: {
    'Dorado': {
      wins: 500,
      losses: 40,
    },
    'Gibraltar': {
      wins: 400,
      losses: 380,
    },
  },
}, {
  name: 'Roadhog',
  wins: 69,
  losses: 9001,
  byMap: {
    'Dorado': {
      wins: 500,
      losses: 40,
    },
    'Gibraltar': {
      wins: 400,
      losses: 380,
    },
  },
}, {
  name: 'Genji',
  wins: 699,
  losses: 9001,
  byMap: {
    'Dorado': {
      wins: 500,
      losses: 40,
    },
    'Gibraltar': {
      wins: 400,
      losses: 380,
    },
  },
}];

class Personal extends Component {
  state = {
    filter: {
      timePeriod: 'week',
      map: 'all',
      hero: '',
    },
  };
  static filterData(data, filter) {
    let filteredData = data;
    // A call will be made to the server for data if a larger time period is selected
    filteredData = filteredData.filter((hero) => {
      return hero.name.indexOf(filter.hero) > -1;
    });
    if (filter.map !== 'all') {
      filteredData = filteredData.filter((hero) => {
        return hero.hasOwnProperty('byMap') && hero.byMap.hasOwnProperty(filter.map);
      }).map((hero) => {
        return {
          name: hero.name,
          wins: hero.byMap[filter.map].wins,
          losses: hero.byMap[filter.map].losses,
        };
      });
    }

    return filteredData;
  }
  handleChange(state) {
    this.setState({filter: state});
  }
  handleReset(defaultFilterStatus) {
    this.setState({filter: defaultFilterStatus});
  }
  render() {
    const data = Personal
      .filterData(tempData, this.state.filter)
      .sort(function sortByWinRate(prev, cur) {
        if ((prev.wins / prev.losses) > (cur.wins / cur.losses)) {
          return -1;
        }
        return 1;
      });
    const isOneHero = (data.length > 1);
    return (
      <div id="Personal">
        <h1>Content Filter</h1>
        <Filter filterStatus={this.state.filter} onChange={this.handleChange.bind(this)} onReset={this.handleReset.bind(this)}/>
        <h1>General Data</h1>
        <GeneralData data={data} filter={this.state.filter}/>
        {isOneHero ? (
          <div>
            <h1>Hero Data</h1>
            <HeroData data={data} filter={this.state.filter}/>
          </div>) : ''}
      </div>
    );
  }
}

export default Personal;
